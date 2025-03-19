import { View, StyleSheet } from 'react-native'
import React from 'react'
import Text from './Text'
import { spacing } from '../themes/styles'

interface ErrorProps {
    error: string
}
export default function Error({ error }: ErrorProps) {
    return (
        <View style={styles.errorContainer}>
            <Text style={styles.errorText}>{error}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    errorContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: spacing.md
    },
    errorText: {
        textAlign: 'center',
    }
})