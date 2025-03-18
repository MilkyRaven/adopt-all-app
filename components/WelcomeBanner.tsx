import { View, StyleSheet } from 'react-native';
import Text from './shared/Text';
import { borderRadius, colors, spacing, thumbnailImage } from '@/modules/shared/themes/styles';

export default function WelcomeBanner() {
    return (
        <View style={styles.container}>
            <View style={styles.image}>
            </View>
            <View>
                <Text type="h1">Welcome to Adopt All</Text>
                <Text type='p' >A place to help animals in need</Text>
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
