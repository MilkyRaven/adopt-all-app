import { View, Text, Button, TextInput, ActivityIndicator } from 'react-native'
import { useLocalSearchParams, router } from 'expo-router';
import useDeleteApplication from '@/modules/application/infraestructure/hooks/useDeleteApplication';

export default function ApplicationDetails() {
    const { id } = useLocalSearchParams();
    const { showDeleteConfirmation, loading } = useDeleteApplication();

    const handleDelete = () => {
        showDeleteConfirmation(id as string, () => {
            router.dismissAll();
        });
    };

    return (
        <View>
            <Text>Application Details View</Text>
            <TextInput editable={false} placeholder='Full Name' value='Milky Kiwi' />
            <Button title='Editar' onPress={() => console.log('Editar')} disabled={loading} />
            {loading ? (
                <ActivityIndicator size="small" />
            ) : (
                <Button title='Borrar' onPress={handleDelete} disabled={loading} />
            )}
        </View>
    )
}
