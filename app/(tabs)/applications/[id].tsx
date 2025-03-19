import { View, Button } from 'react-native'
import { useLocalSearchParams, router } from 'expo-router';
import useDeleteApplication from '@/modules/application/infraestructure/hooks/useDeleteApplication';
import useApplicationForm from '@/modules/application/infraestructure/hooks/useApplicationForm';
import ApplicationForm from '@/modules/application/presentation/ApplicationForm';
import { useState } from 'react';
import { spacing } from '@/modules/shared/themes/styles';

export default function ApplicationDetails() {
    const item = useLocalSearchParams();
    const [isEditable, setIsEditable] = useState(false);
    const { id, fullName, email, comments } = item;
    const { formData, handleOnChange, handleUpdate, error } = useApplicationForm({ fullName, email, comments } as any);
    const { showDeleteConfirmation } = useDeleteApplication();

    const handleDelete = () => {
        showDeleteConfirmation(id as string, () => {
            router.dismissAll();
        });
    };
    return (
        <View style={{ padding: spacing.md }}>
            <View style={{ flexDirection: "row-reverse", gap: spacing.sm }}>
                <Button title='Editar' onPress={() => setIsEditable(true)} disabled={isEditable} />
                <Button title='Borrar' onPress={handleDelete} disabled={isEditable} />
            </View>
            <ApplicationForm
                editable={isEditable}
                formData={formData}
                handleOnChange={handleOnChange}
                handleSubmit={() => handleUpdate(id as string)}
                error={error}
            />
        </View>
    )
}
