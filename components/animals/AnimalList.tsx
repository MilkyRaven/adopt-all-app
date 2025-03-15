import React, { useEffect, useState } from "react";
import { View, FlatList } from 'react-native';
import { Link } from "expo-router";
import AnimalThumbnail from "./AnimalThumbnail";
import { animals } from '../../mockData'
import { useLocation } from "@/modules/location/hooks/useLocation";
import { ExpoLocationService } from "@/modules/location/infraestructure/ExpoLocation";
import { CalculateDistanceFromUserToAnimal } from "@/modules/location/application/CalculateDistanceFromUserToAnimal";
import { CalculateDistanceGeolib } from "@/modules/location/infraestructure/CalculateDistanceGeolib";
import { AnimalWithDistance } from "@/modules/animal/domain/Animal";

export default function AnimalList() {
    const [animalsWithDistance, setAnimalsWithDistance] = useState<AnimalWithDistance[]>([]);
    //TO-DO: refactor
    const locationService = new ExpoLocationService();
    const { location } = useLocation(locationService);
    console.log("location", location);
    //calculate distance
    const geolib = new CalculateDistanceGeolib();
    const calculateDistance = new CalculateDistanceFromUserToAnimal(geolib);
    useEffect(() => {
        if (location) {
            const updatedAnimals = animals.map(animal => ({
                ...animal,
                distance: calculateDistance.execute(location, {
                    lat: animal.location.lat,
                    lon: animal.location.lon
                })
            }));
            setAnimalsWithDistance(updatedAnimals);
            console.log("Updated Animals with Distance:", updatedAnimals);
        }
    }, [location]);

    return (
        <View>
            <FlatList
                data={animalsWithDistance}
                renderItem={({ item }) => (
                    <Link
                        href={{
                            pathname: '/[id]',
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