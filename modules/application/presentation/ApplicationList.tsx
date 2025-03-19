import { View, FlatList, Text, StyleSheet } from 'react-native'
import React from 'react'
import ApplicationThumbnail from './ApplicationThumbnail'
import { Link } from 'expo-router'
import useGetApplications from '../infraestructure/hooks/useGetApplications'
import { spacing } from '@/modules/shared/themes/styles'
import Spacing from '@/modules/shared/custom/Spacing'
import Loading from '@/modules/shared/custom/Loading'
import Error from '@/modules/shared/custom/Error'

export default function ApplicationList() {
    const { applications, loading, error } = useGetApplications();
    if (loading) return <Loading />
    if (error) return <Error message={error} />
    return (
        <View style={styles.container}>
            <FlatList
                data={applications}
                renderItem={({ item }) => (
                    <Link href={{
                        pathname: '/applications/[id]',
                        params: { ...item } //TO-DO: not sure if this is correct, but i want to avoid an extra call
                    }}>
                        <ApplicationThumbnail application={item} />
                        <Spacing />
                    </Link>
                )}
                keyExtractor={item => item.id}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        margin: spacing.md
    }
});
