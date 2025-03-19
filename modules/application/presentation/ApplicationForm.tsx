import { View, StyleSheet } from 'react-native'
import TextInput from '@/modules/shared/custom/TextInput';
import Spacing from '@/modules/shared/custom/Spacing';
import { spacing } from '@/modules/shared/themes/styles';
import Button from '@/modules/shared/custom/Button';
import Error from '@/modules/shared/custom/Error';
import { useTheme } from '@react-navigation/native';

interface ApplicationFormProps {
    formData: any
    handleOnChange: (field: string, value: string) => void;
    handleSubmit: () => void;
    editable?: boolean;
    error?: string | null;
}
export default function ApplicationForm({ formData, editable, handleOnChange, handleSubmit, error }: ApplicationFormProps) {
    const theme = useTheme()
    return (
        <View style={styles.container}>
            <TextInput
                placeholderTextColor={theme.colors.text}
                placeholder='Full Name'
                value={formData.fullName}
                onChangeText={
                    (input: string) => { handleOnChange('fullName', input) }
                }
                editable={editable}
            />
            <Spacing type='sm' />
            <TextInput
                placeholder='Email'
                placeholderTextColor={theme.colors.text}
                value={formData.email}
                onChangeText={
                    (input: string) => { handleOnChange('email', input) }
                }
                editable={editable}
            />
            <Spacing type='sm' />
            <TextInput
                placeholder='Comments'
                placeholderTextColor={theme.colors.text}
                value={formData.comments}
                onChangeText={
                    (input: string) => { handleOnChange('comments', input) }
                }
                editable={editable}
                variant='comment'
                maxLength={140}
            />
            <Spacing type='md' />
            {error && (
                <>
                    <View style={styles.errorContainer}>
                        <Error message={error} />
                    </View>
                    <Spacing type='sm' />
                </>
            )}
            {editable && <View style={styles.buttonContainer}>
                <Button title="Send" onPress={handleSubmit} />
            </View>}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        margin: spacing.md
    },
    buttonContainer: {
        alignSelf: "center"
    },
    errorContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    }
});
