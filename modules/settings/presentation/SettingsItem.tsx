import { borderRadius, colors, spacing } from '@/modules/shared/themes/styles'
import Text from '@/modules/shared/custom/Text';
import { View, StyleSheet, TouchableOpacity } from 'react-native'
import Ionicons from '@expo/vector-icons/Ionicons';
interface SettingsItemProps {
    onPress?: () => void,
    title: string;
    icon: IoniconNames;
}
type IoniconNames = keyof typeof Ionicons.glyphMap;

export default function SettingsItem({ title, icon, onPress }: SettingsItemProps) {
    return (
        <TouchableOpacity onPress={onPress}>
            <View style={styles.container}>
                <View style={styles.title}>
                    <Ionicons name={icon} size={28} color={"black"} />
                    <Text>{title}</Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        padding: spacing.md,
        backgroundColor: colors.background,
        borderRadius: borderRadius.md,
    },
    title: {
        flexDirection: "row",
        alignItems: "center",
        gap: spacing.md
    }
})