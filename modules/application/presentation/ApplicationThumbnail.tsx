import { View, StyleSheet, Image } from 'react-native'
import { Application } from '@/modules/application/domain/entities/Application'
import { borderRadius, colors, spacing, thumbnailImage } from '@/modules/shared/themes/styles'
import Text from '@/modules/shared/custom/Text'
import { useTheme } from '@react-navigation/native'

interface ApplicationThumbnail {
    application: Application
}
export default function ApplicationThumbnail({ application }: ApplicationThumbnail) {
    const theme = useTheme();
    const date = new Date(application.createdAt)
    const humanReadableDate = date.toLocaleDateString()

    return (
        <View style={[styles.container, { backgroundColor: theme.colors.card }]}>
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