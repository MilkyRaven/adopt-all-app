import { View, StyleSheet, Image } from 'react-native'
import { Application } from '@/modules/application/domain/entities/Application'
import { borderRadius, colors, spacing, thumbnailImage } from '@/modules/shared/themes/styles'
import Text from '@/modules/shared/custom/Text'

interface ApplicationThumbnail {
    application: Application
}
export default function ApplicationThumbnail({ application }: ApplicationThumbnail) {
    const date = new Date(application.createdAt)
    const humanReadableDate = date.toLocaleDateString()

    return (
        <View style={styles.container}>
            <Image source={require('@/assets/images/logo.png')} style={styles.image} />
            <View style={styles.textContainer}>
                <Text type='support'>Created: {humanReadableDate}</Text>
                <Text type='h2'>{application.fullName}</Text>
                <Text type='h3'>{application.email}</Text>
                <Text>Reviewing Application</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: spacing.md,
        backgroundColor: colors.background,
        borderRadius: borderRadius.md,
        gap: spacing.md,
        width: "100%",
        flexDirection: "row",
        alignItems: "center"
    },
    textContainer: {
        gap: spacing.sm,
    },
    image: thumbnailImage
})