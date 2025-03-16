import { View, Text, useColorScheme, TouchableOpacity, Appearance, Button } from 'react-native'


export default function SettingsScreen() {
    const currentTheme = useColorScheme();
    const handleToggleTheme = () => {
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';
        Appearance.setColorScheme(newTheme);
    };
    return (
        <View>
            <Text>Current color: {currentTheme}</Text>
            <TouchableOpacity
                onPress={handleToggleTheme}
            >
                <Button title='Switch theme' onPress={handleToggleTheme} />
            </TouchableOpacity>
        </View>
    )
}