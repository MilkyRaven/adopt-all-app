import { View, TextInput, Button, ActivityIndicator } from 'react-native'
import { useLocalSearchParams } from 'expo-router';
import useApplicationForm from '@/modules/application/infraestructure/hooks/useApplicationForm';


export default function CreateApplicationScreen() {
    const { animalId } = useLocalSearchParams();
    const { loading, formData, handleOnChange, handleSubmit } = useApplicationForm();

    return (
        <View>
            <TextInput
                placeholder='Full Name'
                value={formData.fullName}
                onChangeText={
                    (input: string) => { handleOnChange('fullName', input) }
                }
            />
            <TextInput
                placeholder='Email'
                value={formData.email}
                onChangeText={
                    (input: string) => { handleOnChange('email', input) }
                }
            />
            <TextInput
                placeholder='Comments'
                value={formData.comments}
                onChangeText={
                    (input: string) => { handleOnChange('comments', input) }
                }

            />
            {loading ? (
                <ActivityIndicator size="large" />
            ) : (
                <Button title='Submit' onPress={() => handleSubmit(animalId as string)} />
            )}
        </View>
    )
}
