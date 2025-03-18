import { View, StyleSheet } from 'react-native'
import Text from '../shared/Text'
import { borderRadius, colors, spacing } from '@/modules/shared/themes/styles'

interface AnimalLabelProps {
    labelText: string
    isActive?: boolean
}

export default function AnimalLabel({ labelText, isActive = false }: AnimalLabelProps) {
    return (
        <View style={styles.container}>
            <Text type="p">{labelText}</Text>
            {isActive && <View style={styles.isActive} />}
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