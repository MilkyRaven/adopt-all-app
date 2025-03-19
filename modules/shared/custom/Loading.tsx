import { View, ActivityIndicator, StyleSheet } from 'react-native'
import React from 'react'

export default function Loading() {
    return (
        <View style={styles.loadingContainer}>
            <ActivityIndicator size="large" />
        </View>
    )
}

const styles = StyleSheet.create({
    loadingContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})
