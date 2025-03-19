import { useLocalSearchParams } from 'expo-router';
import useApplicationForm from '@/modules/application/infraestructure/hooks/useApplicationForm';
import ApplicationForm from '@/modules/application/presentation/ApplicationForm';
import { StyleSheet, View } from 'react-native';
import { spacing } from '@/modules/shared/themes/styles';
import Text from '@/modules/shared/custom/Text';
import Spacing from '@/modules/shared/custom/Spacing';


export default function CreateApplicationScreen() {
    const { animalId } = useLocalSearchParams();
    const { formData, handleOnChange, handleSubmit, error } = useApplicationForm();
    return (
        <View style={styles.container}>
            <Text>
                Thank you for choosing to adopt! We’re excited to help you find your perfect match. Please fill out this form so we can get to know you better
            </Text>
            <Spacing type='sm' />
            <ApplicationForm
                formData={formData}
                handleOnChange={handleOnChange}
                handleSubmit={() => handleSubmit(animalId as string)}
                error={error}
                editable />
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        paddingHorizontal: spacing.xl,
        paddingVertical: spacing.md
    }
})