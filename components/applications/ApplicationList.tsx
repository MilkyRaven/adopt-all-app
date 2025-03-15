import { View, FlatList } from 'react-native'
import React from 'react'
import { applications } from '@/mockData'
import ApplicationThumbnail from './ApplicationThumbnail'
import { Link } from 'expo-router'

export default function ApplicationList() {
    return (
        <View>
            <FlatList
                data={applications}
                renderItem={({ item }) => (
                    <Link href={{
                        pathname: '/applications/[id]',
                        params: { ...item } //TO-DO: not sure if this is correct, but i want to avoid an extra call
                    }}>
                        <ApplicationThumbnail application={item} />
                    </Link>

                )}
                keyExtractor={item => item.id}
            />
        </View>
    )
}