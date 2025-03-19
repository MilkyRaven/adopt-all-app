import React from "react";
import { View, FlatList, ActivityIndicator, StyleSheet } from 'react-native';
import { Link } from "expo-router";
import AnimalThumbnail from "./AnimalThumbnail";
import { useGetAnimals } from "@/modules/animal/infraestructure/hooks/useGetAnimals";
import Spacing from "@/modules/shared/custom/Spacing";
import { spacing } from "@/modules/shared/themes/styles";

export default function AnimalList() {
    const { animals, loading } = useGetAnimals();

    if (loading) {
        return (
            <View style={styles.loadingContainer}>
                <ActivityIndicator size="large" />
            </View>
        );
    }

    return (
        <View style={styles.container}>
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
                        <Spacing type="sm" />
                    </Link>
                )}
                keyExtractor={item => item.id}
            />
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        marginHorizontal: spacing.md,
        alignItems: "center"
    },
    loadingContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})
