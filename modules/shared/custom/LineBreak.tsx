import { spacing } from '@/modules/shared/themes/styles'
import { useTheme } from '@react-navigation/native';
import { View, StyleSheet } from 'react-native'

export default function LineBreak() {
    const theme = useTheme();
    return (
        <View style={[styles.lineBreak, { backgroundColor: theme.colors.border }]}>
        </View>
    )
}

const styles = StyleSheet.create({
    lineBreak: {
        height: 1,
        marginVertical: spacing.sm
    }
});
