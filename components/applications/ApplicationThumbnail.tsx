import { View, Text, Button } from 'react-native'
import React from 'react'
import AnimalAvatar from '../animals/AnimalAvatar'
import { Application } from '@/modules/application/domain/Application'
import { Link } from 'expo-router'

interface Props {
    application: Application
}
export default function ApplicationThumbnail({ application }: Props) {
    return (
        <View>
            {/* <AnimalAvatar size="thumbnail" image="" /> */}
            <Text>{application.animalId}</Text>
            <Text>{application.createdAt}</Text>
            <Text>Reviewing Application</Text>
        </View>
    )
}