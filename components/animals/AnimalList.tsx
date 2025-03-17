import React, { useEffect, useState } from "react";
import { View, FlatList } from 'react-native';
import { Link } from "expo-router";
import AnimalThumbnail from "./AnimalThumbnail";
import { animals } from '../../mockData'
import { useLocation } from "@/modules/location/hooks/useLocation";
import { CalculateDistanceFromUserToAnimal } from "@/modules/location/application/CalculateDistanceFromUserToAnimal";
import { CalculateDistanceGeolib } from "@/modules/location/infraestructure/CalculateDistanceGeolib";
import { Animal, AnimalWithDistance } from "@/modules/animal/domain/entities/Animal";
import { Location } from "@/modules/location/domain/Location";
//calculate distance
const geolib = new CalculateDistanceGeolib();
const calculateDistance = new CalculateDistanceFromUserToAnimal(geolib);

export default function AnimalList() {
    const [animalsWithDistance, setAnimalsWithDistance] = useState<AnimalWithDistance[]>([]);
    //TO-DO: refactor

    const { location } = useLocation();

    function calculateAnimalDistancesFromUser(
        location: Location,
        animals: Animal[]
    ): AnimalWithDistance[] {
        return animals.map((animal) => ({
            ...animal,
            distance: calculateDistance.execute(location, {
                lat: animal.location.lat,
                lon: animal.location.lon,
            }),
        }));
    }

    useEffect(() => {
        if (location) {
            const updatedAnimals = calculateAnimalDistancesFromUser(location, animals);
            setAnimalsWithDistance(updatedAnimals);
        }
    }, [location]);

    return (
        <View>
            <FlatList
                data={animalsWithDistance}
                renderItem={({ item }) => (
                    <Link
                        href={{
                            pathname: '/explore/[id]',
                            params: { ...item } //TO-DO: not sure if this is correct, but i want to avoid an extra call
                        }}>
                        <AnimalThumbnail {...item} />
                    </Link>
                )}
                keyExtractor={item => item.id}
            />
        </View>
    )
}