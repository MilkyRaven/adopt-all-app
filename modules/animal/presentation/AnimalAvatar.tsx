import React from 'react';
import { Image, View, StyleSheet } from 'react-native';
import { borderRadius } from '@/modules/shared/themes/styles';

export default function AnimalAvatar({ image, size }: { image: string, size: 'thumbnail' | 'fullProfile' }) {
    const avatarSize = size === 'thumbnail' ? 80 : 150;

    const dynamicStyles = {
        container: {
            width: avatarSize,
            height: avatarSize
        },
        image: {
            width: avatarSize,
            height: avatarSize
        }
    };

    return (
        <View style={dynamicStyles.container}>
            <Image
                source={{ uri: image }}
                style={[dynamicStyles.image, styles.image]}
                resizeMode="cover"
            />
        </View>
    );
}

const styles = StyleSheet.create({
    image: {
        borderRadius: borderRadius.md
    }
});
