import React from "react";
import { View, Text } from 'react-native';
import AnimalAvatar from "./AnimalAvatar";

interface AnimalThumbnailProps {
    image: string;
    name: string;
    species: string;
    distance: string;
    neutered: string;
    age: string;
}

export default function AnimalThumbnail({
    image,
    name,
    species,
    distance,
    neutered,
    age,
}: AnimalThumbnailProps) {
    return (
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <AnimalAvatar image={image} size="thumbnail" />
            <View>
                <Text>{name}</Text>
                <Text>{species}</Text>
                <Text>{distance}</Text>
                <Text>{neutered}</Text>
                <Text>{age}</Text>
            </View>
        </View>
    );
}
