import React from "react";
import { View, FlatList, TouchableOpacity } from 'react-native';
import AnimalThumbnail from "./AnimalThumbnail";
import { animals } from '../../mockData'

export default function AnimalList() {
    return (
        <View>

            <FlatList
                data={animals}
                renderItem={({ item }) => (
                    <TouchableOpacity onPress={() => console.log(item)}>
                        <AnimalThumbnail {...item} />
                    </TouchableOpacity>)}
                keyExtractor={item => item.id}
            />
        </View>
    )
}