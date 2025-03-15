import { View, Text, Button, TextInput } from 'react-native'
import React from 'react'

export default function ApplicationDetails() {
    return (
        <View>
            <Text>Application Details View</Text>
            <TextInput editable={false} placeholder='Full Name' value='Milky Kiwi' />
            <Button title='Editar' onPress={() => console.log('Editar')} />
            <Button title='Borrar' onPress={() => console.log('Borrar')} />
        </View>
    )
}