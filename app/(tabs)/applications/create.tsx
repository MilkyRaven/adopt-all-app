import { useLocalSearchParams } from 'expo-router';
import useApplicationForm from '@/modules/application/infraestructure/hooks/useApplicationForm';
import ApplicationForm from '@/modules/application/presentation/ApplicationForm';


export default function CreateApplicationScreen() {
    const { animalId } = useLocalSearchParams();
    const { formData, handleOnChange, handleSubmit, error } = useApplicationForm();
    return (
        <ApplicationForm
            formData={formData}
            handleOnChange={handleOnChange}
            handleSubmit={() => handleSubmit(animalId as string)}
            error={error}
            editable />
    )
}
