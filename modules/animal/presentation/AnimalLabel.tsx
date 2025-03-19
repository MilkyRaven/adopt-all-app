import { View, StyleSheet } from 'react-native'
import Text from '@/modules/shared/custom/Text'
import { borderRadius, colors, spacing } from '@/modules/shared/themes/styles'
import Ionicons from '@expo/vector-icons/Ionicons'
import { useTheme } from '@react-navigation/native'

interface AnimalLabelProps {
    labelText: string
    isActive?: boolean
}

export default function AnimalLabel({ labelText, isActive = false }: AnimalLabelProps) {
    const theme = useTheme();
    return (
        <View style={styles.container}>
            <Text type="p">{labelText}</Text>
            {isActive && <Ionicons name="checkmark" size={20} color={theme.colors.text} />}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",
        gap: 8,
        borderWidth: 1,
        borderColor: "black",
        alignSelf: 'flex-start',
        paddingHorizontal: spacing.sm,
        paddingVertical: spacing.xs,
        borderRadius: borderRadius.md,
    },
    isActive: {
        width: 5,
        height: 5,
        backgroundColor: "black",
        borderRadius: borderRadius.sm
    }
})