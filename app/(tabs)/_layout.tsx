
import { Tabs } from 'expo-router';


export default function TabLayout() {
    return (
        <Tabs
            screenOptions={{
                headerShown: false,
            }}>
            <Tabs.Screen
                name="explore"
                options={{
                    title: 'Explore'
                }}
            />
            <Tabs.Screen
                name="applications"
                options={{
                    title: 'My applications'
                }}
            />
            <Tabs.Screen
                name="settings"
                options={{
                    title: 'Settings'
                }}
            />
        </Tabs>
    );
}
