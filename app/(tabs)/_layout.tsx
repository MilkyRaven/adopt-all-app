
import { Tabs } from 'expo-router';


export default function TabLayout() {
    return (
        <Tabs
            screenOptions={{
                headerShown: false,
            }}>
            <Tabs.Screen
                name="index"
                options={{
                    title: 'Explore'
                }}
            />
            <Tabs.Screen
                name="applications/index"
                options={{
                    title: 'My applications'
                }}
            />
            <Tabs.Screen
                name="settings/index"
                options={{
                    title: 'Settings'
                }}
            />
        </Tabs>
    );
}
