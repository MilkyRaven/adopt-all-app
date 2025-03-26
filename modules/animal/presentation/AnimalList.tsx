import { View, FlatList, StyleSheet, ScrollView } from 'react-native';
import { Link } from "expo-router";
import AnimalThumbnail from "./AnimalThumbnail";
import Error from "@/modules/shared/custom/Error";
import Spacing from "@/modules/shared/custom/Spacing";
import { spacing } from "@/modules/shared/themes/styles";
import Loading from "@/modules/shared/custom/Loading";
import EmptyState from '@/modules/shared/custom/EmptyState';
import { Animal } from '../domain/entities/Animal';

interface AnimalListProps {
    animals: Animal[];
    loading: boolean;
    error: string | null;
}
export default function AnimalList({ animals, loading, error }: AnimalListProps) {

    if (loading) {
        return <Loading />
    }

    if (error) {
        return <Error message={error} />
    }
    if (animals.length === 0) return <EmptyState message='Ops! Empty here. No animals in our database' />

    return (
        <View style={styles.container}>
            <FlatList
                showsVerticalScrollIndicator={false}
                data={animals}
                renderItem={({ item }) => (
                    <Link
                        href={{
                            pathname: '/explore/[id]',
                            // @ts-ignore - Passing complex object as params
                            params: { ...item }
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
        flex: 1,
        marginHorizontal: spacing.md,
        alignItems: "center"
    }
})
