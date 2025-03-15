import React from 'react';
import { Image, View } from 'react-native';

export default function AnimalAvatar({ imageUrl, size }: { imageUrl: string, size: 'thumbnail' | 'fullProfile' }) {
    const avatarSize = size === 'thumbnail' ? 80 : 150;

    return (
        <View style={[{ width: avatarSize, height: avatarSize }]}>
            <Image
                source={{ uri: imageUrl }}
                style={[{ width: avatarSize, height: avatarSize, borderRadius: 8 }]}
                resizeMode="cover"
            />
        </View>
    );
}
