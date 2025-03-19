import { colors, spacing } from '@/modules/shared/themes/styles'
import { View, StyleSheet } from 'react-native'

export default function LineBreak() {
    return (
        <View style={styles.lineBreak}>
        </View>
    )
}

const styles = StyleSheet.create({
    lineBreak: {
        height: 1,
        backgroundColor: colors.background,
        marginVertical: spacing.sm
    }
});
