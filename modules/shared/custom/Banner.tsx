import { View, StyleSheet, Image } from 'react-native';
import Text from './Text';
import { borderRadius, colors, spacing, thumbnailImage } from '@/modules/shared/themes/styles';

interface BannerProps {
    title: string;
    description: string;
}
export default function Banner({ title, description }: BannerProps) {
    return (
        <View style={styles.container}>
            <Image source={require('@/assets/images/logo.png')} style={styles.image} />
            <View style={styles.textContainer}>
                <Text type="h1">{title}</Text>
                <Text type='p' >{description}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        display: "flex",
        flexDirection: "row",
        gap: spacing.lg,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.background,
        borderRadius: borderRadius.md,
        padding: spacing.md,
    },
    textContainer: {
        alignItems: "center",
    },
    image: thumbnailImage
});
