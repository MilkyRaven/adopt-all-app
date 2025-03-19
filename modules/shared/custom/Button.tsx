import { Pressable, StyleSheet } from 'react-native'
import React, { ReactNode } from 'react'
import { Link } from 'expo-router'
import { borderRadius, colors, spacing } from '@/modules/shared/themes/styles';
import Text from '@/modules/shared/custom/Text';
import { useTheme } from '@react-navigation/native';

interface ButtonProps {
    title: string;
    onPress?: () => void;
    children?: ReactNode;
    color?: string;
    href?: any;
}

export default function Button({ title, onPress, href, children }: ButtonProps) {
    const theme = useTheme()
    if (href) {
        return (
            <Link href={href} asChild>
                <Pressable
                    style={[styles.button, { backgroundColor: theme.colors.card }]}
                    onPress={onPress}
                >
                    {children || <Text type='h2'>{title}</Text>}
                </Pressable>
            </Link>
        );
    }

    return (
        <Pressable
            style={[styles.button, { backgroundColor: theme.colors.card }]}
            onPress={onPress}
        >
            {children || <Text type='h2'>{title}</Text>}
        </Pressable>
    );
}

const styles = StyleSheet.create({
    button: {
        paddingVertical: spacing.sm,
        paddingHorizontal: spacing.md,
        alignSelf: 'flex-start',
        borderRadius: borderRadius.lg,
        justifyContent: 'center',
    }
})
