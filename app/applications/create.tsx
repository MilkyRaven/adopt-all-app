import { View, TextInput, Button } from 'react-native'
import { router } from 'expo-router';
import React, { useState } from 'react'

export default function CreateApplicationScreen() {
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [comments, setComments] = useState('');

    const handleSubmit = () => {
        console.log('Full Name:', fullName);
        console.log('Email:', email);
        console.log('Comments:', comments);
        router.dismissTo('/applications');
    };
    return (
        <View>
            <TextInput
                placeholder='Full Name'
                value={fullName}
                onChangeText={setFullName}
            />
            <TextInput
                placeholder='Email'
                value={email}
                onChangeText={setEmail}
            />
            <TextInput
                placeholder='Comments'
                value={comments}
                onChangeText={setComments}
            />
            <Button title='Submit' onPress={handleSubmit} />
        </View>
    )
}