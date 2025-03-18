import { View, StyleSheet } from 'react-native'
import { spacing } from '@/modules/shared/themes/styles'

type SpacingType = 'xs' | 'sm' | 'md' | 'lg' | 'xl'

interface SpacingProps {
    type?: SpacingType
}

export default function Spacing({ type = 'md' }: SpacingProps) {
    const spacingStyle = [
        type === 'xs' && styles.xs,
        type === 'sm' && styles.sm,
        type === 'md' && styles.md,
        type === 'lg' && styles.lg,
        type === 'xl' && styles.xl,
    ]

    return (
        <>
            <View style={spacingStyle} />
        </>
    )
}

const styles = StyleSheet.create({
    xs: {
        height: spacing.xs,
    },
    sm: {
        height: spacing.sm,
    },
    md: {
        height: spacing.md,
    },
    lg: {
        height: spacing.lg,
    },
    xl: {
        height: spacing.xl,
    }
})
