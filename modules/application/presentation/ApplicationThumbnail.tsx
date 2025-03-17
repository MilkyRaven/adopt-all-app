import { View, Text } from 'react-native'
import React from 'react'
import { Application } from '@/modules/application/domain/entities/Application'

interface Props {
    application: Application
}
export default function ApplicationThumbnail({ application }: Props) {
    console.log(application)
    return (
        <View>
            {/* <AnimalAvatar size="thumbnail" image="" /> */}
            <Text>{application.animalId}</Text>
            <Text>{application.createdAt}</Text>
            <Text>Reviewing Application</Text>
        </View>
    )
}