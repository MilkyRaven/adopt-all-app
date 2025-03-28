import { useState, useEffect } from "react";
import { FindAnimals } from "../../application/FindAnimals";
import { repository } from "../index";
import { Animal, AnimalWithDistance } from "../../domain/entities/Animal";
import { useAnimalFilter } from "../../presentation/FilterContext";
import { useLocation } from "@/modules/location/hooks/useLocation";
import { CalculateDistanceFromUserToAnimal } from "@/modules/location/application/CalculateDistanceFromUserToAnimal";
import { CalculateDistanceGeolib } from "@/modules/location/infraestructure/CalculateDistanceGeolib";
import { Location } from "@/modules/location/domain/Location";

const geolib = new CalculateDistanceGeolib();
const calculateDistance = new CalculateDistanceFromUserToAnimal(geolib);

export const useGetAnimals = () => {
  const [animals, setAnimals] = useState<Animal[]>([]);
  const [animalsWithDistance, setAnimalsWithDistance] = useState<
    AnimalWithDistance[]
  >([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const { filter } = useAnimalFilter();
  const { location } = useLocation();

  const calculateAnimalDistancesFromUser = (
    userLocation: Location,
    animalList: Animal[]
  ): AnimalWithDistance[] => {
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
      //TO-DO -> could refactor this query construction?
      const queryParams: string[] = [];

      if (filter.species && filter.species !== "all") {
        queryParams.push(`species=${filter.species}`);
      }

      if (filter.age !== null) {
        queryParams.push(`age=${filter.age}`);
      }

      queryParams.push(`orderBy=${filter.orderBy}`);

      const queryString = queryParams.join("&");
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
  useEffect(() => {
    fetchAnimals();
  }, [filter]);

  useEffect(() => {
    if (location && animals.length > 0) {
      const animalsWithDistances = calculateAnimalDistancesFromUser(
        location,
        animals
      );
      setAnimalsWithDistance(animalsWithDistances);
    } else {
      setAnimalsWithDistance([]);
    }
  }, [animals, location]);

  return {
    animals: animalsWithDistance,
    loading,
    error,
    refetch: fetchAnimals,
  };
};
