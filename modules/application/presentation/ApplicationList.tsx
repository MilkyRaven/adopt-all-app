import { View, FlatList, StyleSheet } from 'react-native'
import React from 'react'
import ApplicationThumbnail from './ApplicationThumbnail'
import { Link } from 'expo-router'
import { spacing } from '@/modules/shared/themes/styles'
import Spacing from '@/modules/shared/custom/Spacing'
import Loading from '@/modules/shared/custom/Loading'
import Error from '@/modules/shared/custom/Error'
import EmptyState from '@/modules/shared/custom/EmptyState'
import { Application } from '../domain/entities/Application'

interface ApplicationListProps {
    applications: Application[]
    loading: boolean
    error: string | null
}
export default function ApplicationList({ applications, loading, error }: ApplicationListProps) {
    if (loading) return <Loading />
    if (error) return <Error message={error} />
    if (applications.length === 0) return <EmptyState message="Ops! You haven't created any adoption applications" />
    return (
        <View style={styles.container}>
            <FlatList
                showsVerticalScrollIndicator={false}
                data={applications}
                renderItem={({ item }) => (
                    <Link href={{
                        pathname: '/applications/[id]',
                        params: { ...item }
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
        flex: 1,
        margin: spacing.md
    }
});
