import React from "react";
import { View } from 'react-native';
import AnimalAvatar from "./AnimalAvatar";

export default function AnimalThumbnail() {

    return (
        <View>
            {/* TO-DO: pasar real props */}
            <AnimalAvatar imageUrl="https://images.unsplash.com/photo-1511275539165-cc46b1ee89bf" size="thumbnail" />
        </View>
    );
}
