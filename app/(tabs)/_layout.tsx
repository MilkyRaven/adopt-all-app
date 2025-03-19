import { Tabs } from 'expo-router';
import Ionicons from '@expo/vector-icons/Ionicons';
import { StyleSheet } from 'react-native';
import { useTheme } from '@react-navigation/native';
import { text, spacing } from '../../modules/shared/themes/styles';

export default function TabLayout() {
    const theme = useTheme();

    return (
        <Tabs
            screenOptions={{
                headerShown: false,
                tabBarStyle: {
                    ...styles.tabBar,
                    backgroundColor: theme.colors.card,
                },
                tabBarLabelStyle: styles.tabLabel,
                tabBarActiveTintColor: theme.colors.primary,
                tabBarInactiveTintColor: theme.colors.text,
            }}>
            <Tabs.Screen
                name="explore"
                options={{
                    title: 'Explore',
                    tabBarIcon: ({ color }) => {
                        return <Ionicons name="paw" size={28} color={color} />
                    },
                }}
            />
            <Tabs.Screen
                name="applications"
                options={{
                    title: 'My applications',
                    tabBarIcon: ({ color }) => {
                        return <Ionicons name="heart" size={28} color={color} />
                    },
                }}
            />
            <Tabs.Screen
                name="settings"
                options={{
                    title: 'Settings',
                    tabBarIcon: ({ color }) => {
                        return <Ionicons name="settings" size={28} color={color} />
                    },
                }}
            />
        </Tabs>
    );
}

const styles = StyleSheet.create({
    tabBar: {
        height: 60,
        paddingTop: spacing.xs,
        paddingBottom: spacing.xs,
    },
    tabLabel: {
        fontSize: text.sm,
        fontWeight: '500',
    }
});
