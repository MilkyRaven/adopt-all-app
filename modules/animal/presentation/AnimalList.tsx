import { View, FlatList, StyleSheet } from 'react-native';
import { Link } from "expo-router";
import AnimalThumbnail from "./AnimalThumbnail";
import Error from "@/modules/shared/custom/Error";
import { useGetAnimals } from "@/modules/animal/infraestructure/hooks/useGetAnimals";
import Spacing from "@/modules/shared/custom/Spacing";
import { spacing } from "@/modules/shared/themes/styles";
import Loading from "@/modules/shared/custom/Loading";
import EmptyState from '@/modules/shared/custom/EmptyState';

export default function AnimalList() {
    const { animals, loading, error } = useGetAnimals();

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
    }
})
