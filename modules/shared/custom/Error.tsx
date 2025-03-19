import { View, StyleSheet } from 'react-native'
import React from 'react'
import Text from './Text'
import { spacing } from '../themes/styles'

interface ErrorProps {
    message: string
}
export default function Error({ message }: ErrorProps) {
    return (
        <View style={styles.errorContainer}>
            <Text style={styles.errorText}>{message}</Text>
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