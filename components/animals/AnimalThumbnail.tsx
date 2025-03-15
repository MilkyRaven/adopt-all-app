import React from "react";
import { View, Text } from 'react-native';
import AnimalAvatar from "./AnimalAvatar";
import { Animal, AnimalWithDistance } from "@/modules/animal/domain/Animal";



export default function AnimalThumbnail({
    image,
    name,
    species,
    neutered,
    age,
    distance
}: AnimalWithDistance) {
    console.log(distance);
    return (
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <AnimalAvatar image={image} size="thumbnail" />
            <View>
                <Text>{name}</Text>
                <Text>{species}</Text>
                <Text>A {distance} de ti</Text>
                <Text>{neutered ? 'Neutered' : 'Not Neutered'}</Text>
                <Text>{age}</Text>
            </View>
        </View>
    );
}
