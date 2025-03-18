import { View, StyleSheet } from 'react-native'
import { Application } from '@/modules/application/domain/entities/Application'
import { borderRadius, colors, spacing } from '@/modules/shared/themes/styles'
import Text from '@/components/shared/Text'

interface ApplicationThumbnail {
    application: Application
}
export default function ApplicationThumbnail({ application }: ApplicationThumbnail) {
    return (
        <View style={styles.container}>
            {/* <AnimalAvatar size="thumbnail" image="" /> */}
            <Text>{application.animalId}</Text>
            <Text>{application.createdAt}</Text>
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