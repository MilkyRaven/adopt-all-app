import { View, StyleSheet } from 'react-native'
import { Application } from '@/modules/application/domain/entities/Application'
import { borderRadius, colors, spacing } from '@/modules/shared/themes/styles'
import Text from '@/modules/shared/custom/Text'

interface ApplicationThumbnail {
    application: Application
}
export default function ApplicationThumbnail({ application }: ApplicationThumbnail) {
    const date = new Date(application.createdAt)
    const humanReadableDate = date.toLocaleDateString()

    return (
        <View style={styles.container}>
            <Text>{humanReadableDate}</Text>
            <Text>Reviewing Application</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: spacing.md,
        backgroundColor: colors.background,
        borderRadius: borderRadius.md,
        gap: spacing.sm,
        width: "100%"
    }
})