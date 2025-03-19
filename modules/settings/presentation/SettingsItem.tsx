import { borderRadius, colors, spacing } from '@/modules/shared/themes/styles'
import Text from '@/modules/shared/custom/Text';
import { View, StyleSheet, TouchableOpacity } from 'react-native'
import Ionicons from '@expo/vector-icons/Ionicons';
import { useTheme } from '@react-navigation/native';
interface SettingsItemProps {
    onPress?: () => void,
    title: string;
    icon: IoniconNames;
}
type IoniconNames = keyof typeof Ionicons.glyphMap;

export default function SettingsItem({ title, icon, onPress }: SettingsItemProps) {
    const theme = useTheme();
    return (
        <TouchableOpacity onPress={onPress}>
            <View style={[styles.container, { backgroundColor: theme.colors.card }]}>
                <View style={styles.title}>
                    <Ionicons name={icon} size={28} color={theme.colors.primary} />
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
        borderRadius: borderRadius.md,
    },
    title: {
        flexDirection: "row",
        alignItems: "center",
        gap: spacing.md
    }
})