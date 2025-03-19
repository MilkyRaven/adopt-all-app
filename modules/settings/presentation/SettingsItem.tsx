import { borderRadius, colors, spacing } from '@/modules/shared/themes/styles'
import Text from '@/modules/shared/custom/Text';
import { View, StyleSheet, TouchableOpacity } from 'react-native'
interface SettingsItemProps {
    onPress?: () => void,
    title: string;
    icon: string;
    shouldOpen?: boolean
}
export default function SettingsItem({ title, icon, shouldOpen, onPress }: SettingsItemProps) {
    return (
        <TouchableOpacity onPress={onPress}>
            <View style={styles.container}>
                <View style={styles.title}>
                    <Text>{icon}</Text>
                    <Text>{title}</Text>
                </View>
                {shouldOpen && <Text> ▹</Text>}
            </View>
        </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: "space-between",
        padding: spacing.md,
        backgroundColor: colors.background,
        borderRadius: borderRadius.md,
    },
    title: {
        flexDirection: "row",
        gap: spacing.md
    }
})