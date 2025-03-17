import { View, TextInput, Button } from 'react-native'
import React from 'react'

interface ApplicationFormProps {
    formData: any
    handleOnChange: (field: string, value: string) => void;
    handleSubmit: () => void;
    editable?: boolean;
}
export default function ApplicationForm({ formData, editable, handleOnChange, handleSubmit }: ApplicationFormProps) {
    return (
        <View>
            <TextInput
                placeholder='Full Name'
                value={formData.fullName}
                onChangeText={
                    (input: string) => { handleOnChange('fullName', input) }
                }
                editable={editable}
            />
            <TextInput
                placeholder='Email'
                value={formData.email}
                onChangeText={
                    (input: string) => { handleOnChange('email', input) }
                }
                editable={editable}
            />
            <TextInput
                placeholder='Comments'
                value={formData.comments}
                onChangeText={
                    (input: string) => { handleOnChange('comments', input) }
                }
                editable={editable}

            />
            <Button title='Submit' onPress={handleSubmit} />
        </View>
    )
}