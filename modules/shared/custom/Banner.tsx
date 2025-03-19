import { View, StyleSheet } from 'react-native';
import Text from './Text';
import { borderRadius, colors, spacing, thumbnailImage } from '@/modules/shared/themes/styles';

interface BannerProps {
    title: string;
    description: string;
}
export default function Banner({ title, description }: BannerProps) {
    return (
        <View style={styles.container}>
            <View style={styles.image}>
            </View>
            <View>
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
        gap: spacing.md,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.background,
        borderRadius: borderRadius.md,
        padding: spacing.md,
    },
    image: thumbnailImage
});
