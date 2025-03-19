import { borderRadius, colors, spacing, text } from '@/modules/shared/themes/styles'
import { useTheme } from '@react-navigation/native'
import { TextInput as NativeTextInput, StyleSheet, TextInputProps as NativeTextInputProps } from 'react-native'

interface TextInputProps extends NativeTextInputProps {
    onChangeText: (text: string) => void,
    variant?: 'default' | 'comment'
}

export default function TextInput({ onChangeText, variant = 'default', style, editable, ...props }: TextInputProps) {
    const theme = useTheme()
    return (
        <NativeTextInput
            multiline
            style={[variant === 'comment' ? styles.commentInput : styles.input, !editable && styles.inactive, { backgroundColor: theme.colors.card, color: theme.colors.text }, style]}
            onChangeText={onChangeText}
            textAlignVertical={variant === 'comment' ? "top" : "center"}
            editable={editable}
            {...props}
        />
    )
}
const styles = StyleSheet.create({
    input: {
        height: 48,
        borderWidth: 1,
        borderRadius: borderRadius.md,
        paddingVertical: spacing.xs,
        paddingHorizontal: spacing.md,
        fontSize: text.sm
    }, inactive: {
        borderWidth: 1,
    },
    commentInput: {
        height: 120,
        borderWidth: 1,
        borderRadius: borderRadius.md,
        padding: spacing.md,
        fontSize: text.sm,
        paddingTop: spacing.md
    }
})
