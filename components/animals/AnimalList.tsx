import React from "react";
import { View, FlatList, ActivityIndicator } from 'react-native';
import { Link } from "expo-router";
import AnimalThumbnail from "./AnimalThumbnail";
import { useGetAnimals } from "@/modules/animal/infraestructure/hooks/useGetAnimals";

export default function AnimalList() {
    const { animals, loading } = useGetAnimals();

    if (loading) {
        return (
            <View>
                <ActivityIndicator size="large" />
            </View>
        );
    }

    return (
        <View>
            <FlatList
                data={animals}
                renderItem={({ item }) => (
                    <Link
                        href={{
                            pathname: '/explore/[id]',
                            // @ts-ignore - Passing complex object as params
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
