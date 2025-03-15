import React from "react";
import { View, FlatList } from 'react-native';
import { Link } from "expo-router";
import AnimalThumbnail from "./AnimalThumbnail";
import { animals } from '../../mockData'

export default function AnimalList() {
    return (
        <View>
            <FlatList
                data={animals}
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