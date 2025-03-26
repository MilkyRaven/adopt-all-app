import { useState, useEffect, useMemo } from "react";
import { FindAnimals } from "../../application/FindAnimals";
import { repository } from "../index";
import { Animal } from "../../domain/entities/Animal";
import { useAnimalFilter } from "../../presentation/FilterContext";
import { useLocation } from "@/modules/location/hooks/useLocation";
import { CalculateDistanceFromUserToAnimal } from "@/modules/location/application/CalculateDistanceFromUserToAnimal";
import { CalculateDistanceGeolib } from "@/modules/location/infraestructure/CalculateDistanceGeolib";
import { Location } from "@/modules/location/domain/Location";

const geolib = new CalculateDistanceGeolib();
const calculateDistance = new CalculateDistanceFromUserToAnimal(geolib);

export const useGetAnimals = () => {
  const [animals, setAnimals] = useState<Animal[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const { filter, buildQuery } = useAnimalFilter();
  const { location } = useLocation();

  const calculateAnimalDistancesFromUser = (
    userLocation: Location,
    animalList: Animal[]
  ): Animal[] => {
    return animalList.map((animal) => ({
      ...animal,
      distance: calculateDistance.execute(userLocation, {
        lat: animal.location.lat,
        lon: animal.location.lon,
      }),
    }));
  };

  const fetchAnimals = async () => {
    try {
      setLoading(true);
      setError(null);

      const queryString = buildQuery(filter);
      //can we avoid here creating the instance every time fetch animals is executed?
      const findAnimals = new FindAnimals(repository.application);

      const result = await findAnimals.execute(queryString);
      setAnimals(result);
    } catch (err) {
      setError(
        "There was an error fetching the animals. Please try again later."
      );
    } finally {
      setLoading(false);
    }
  };
  const processedAnimals = useMemo<Animal[]>(() => {
    if (animals.length === 0) {
      return [];
    }

    if (!location) {
      return animals;
    }

    return calculateAnimalDistancesFromUser(location, animals);
  }, [animals, location]);

  useEffect(() => {
    fetchAnimals();
  }, [filter]);

  return {
    animals: processedAnimals,
    loading,
    error,
    refetch: fetchAnimals,
  };
};
