import { View, Text, Button, ActivityIndicator } from 'react-native'
import { useLocalSearchParams, router } from 'expo-router';
import useDeleteApplication from '@/modules/application/infraestructure/hooks/useDeleteApplication';
import useApplicationForm from '@/modules/application/infraestructure/hooks/useApplicationForm';
import ApplicationForm from '@/modules/application/presentation/ApplicationForm';
import { useState } from 'react';

export default function ApplicationDetails() {
    const item = useLocalSearchParams();
    const [isEditable, setIsEditable] = useState(false);
    const { id, fullName, email, comments } = item;
    const { formData, handleOnChange, handleUpdate } = useApplicationForm({ fullName, email, comments } as any);
    const { showDeleteConfirmation, loading } = useDeleteApplication();

    const handleDelete = () => {
        showDeleteConfirmation(id as string, () => {
            router.dismissAll();
        });
    };
    return (
        <View>
            <Text>Application Details View</Text>
            <ApplicationForm editable={isEditable} formData={formData} handleOnChange={handleOnChange} handleSubmit={() => handleUpdate(id as string)} />
            <Button title='Editar' onPress={() => setIsEditable(true)} disabled={isEditable} />
            {loading ? (
                <ActivityIndicator size="small" />
            ) : (
                <Button title='Borrar' onPress={handleDelete} disabled={isEditable} />
            )}
        </View>
    )
}
