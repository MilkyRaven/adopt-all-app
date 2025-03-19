import { View, StyleSheet, Image } from 'react-native';
import Text from './Text';
import { borderRadius, spacing, thumbnailImage } from '@/modules/shared/themes/styles';
import { useTheme } from '@react-navigation/native';

interface BannerProps {
    title: string;
    description: string;
}
export default function Banner({ title, description }: BannerProps) {
    const theme = useTheme();
    return (
        <View style={[styles.container, { backgroundColor: theme.colors.card }]}>
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
        borderRadius: borderRadius.md,
        padding: spacing.md,
    },
    textContainer: {
        alignItems: "center",
    },
    image: thumbnailImage
});
