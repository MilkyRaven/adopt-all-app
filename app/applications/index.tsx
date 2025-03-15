import { View, Text } from 'react-native'
import React from 'react'
import ApplicationList from '@/components/applications/ApplicationList'

export default function ApplicationListScreen() {
    return (
        <View>
            <Text>My Applications</Text>
            <ApplicationList />
        </View>
    )
}