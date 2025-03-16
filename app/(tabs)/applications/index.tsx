import { View, Text } from 'react-native'
import React from 'react'
import ApplicationList from '@/components/applications/ApplicationList'

export default function ApplicationsScreen() {
    return (
        <View>
            <Text>My Applications</Text>
            <ApplicationList />
        </View>
    )
}