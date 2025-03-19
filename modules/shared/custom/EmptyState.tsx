import { View, StyleSheet } from 'react-native'
import Text from './Text'
interface EmptyStateProps {
    message: string
}

export default function EmptyState({ message }: EmptyStateProps) {
    return (
        <View style={styles.stateContainer}>
            <Text>{message}</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    stateContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
})