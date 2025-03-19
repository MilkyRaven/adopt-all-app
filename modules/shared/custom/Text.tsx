import { Text as NativeText, StyleSheet, TextStyle } from 'react-native'
import { text } from '@/modules/shared/themes/styles'
import { useTheme } from '@react-navigation/native'

type TextType = 'h1' | 'h2' | 'h3' | 'p' | 'support' | 'caption'

interface TextProps {
    children: React.ReactNode
    type?: TextType
    style?: TextStyle | TextStyle[]
}

export default function Text({ children, type = 'p', style }: TextProps) {
    const theme = useTheme();

    const textStyle = [
        type === 'h1' && styles.h1,
        type === 'h2' && styles.h2,
        type === 'h3' && styles.h3,
        type === 'p' && styles.p,
        type === 'support' && styles.support,
        type === 'caption' && styles.caption,
        { color: theme.colors.text }, // Apply theme text color
        style
    ]

    return (
        <>
            <NativeText style={textStyle}>{children}</NativeText>
        </>
    )
}

const styles = StyleSheet.create({
    h1: {
        fontSize: text.xl,
        fontWeight: "600",
    },
    h2: {
        fontSize: text.lg,
        fontWeight: "500"
    },
    h3: {
        fontSize: text.md,
    },
    p: {
        fontSize: text.sm
    },
    support: {
        fontSize: text.xs,
    },
    caption: {
        fontSize: text.xxs,
        fontWeight: '300',
    }
})
