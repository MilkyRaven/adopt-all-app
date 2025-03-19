import SettingsItem from '@/modules/settings/presentation/SettingsItem';
import { View, useColorScheme, TouchableOpacity, Appearance, Button } from 'react-native'
import Text from '@/modules/shared/custom/Text';
import Spacing from '@/modules/shared/custom/Spacing';
import { spacing } from '@/modules/shared/themes/styles';

export default function SettingsScreen() {
    const currentTheme = useColorScheme();
    const handleToggleTheme = () => {
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';
        Appearance.setColorScheme(newTheme);
    };
    return (
        <View style={{ padding: spacing.md }}>
            <SettingsItem
                title={currentTheme === 'light' ? 'Dark mode' : 'Light mode'}
                icon={currentTheme === 'light' ? 'moon' : 'sunny'}
                onPress={handleToggleTheme}
            />
            <Spacing type='sm' />
            <SettingsItem title='Security and Privacy' icon='finger-print' />
            <Spacing type='sm' />
            <SettingsItem title='Notifications' icon='notifications' />
            <Spacing type='md' />
            <SettingsItem title='Get Help' icon='help-circle' />
            <Spacing type='md' />
            <SettingsItem title='Log out' icon='log-out' />
            <Spacing type='xl' />
            <View style={{ alignItems: "center" }}>
                <Text type='h1'>Adopt All</Text>
                <Spacing type='md' />
                <Text type='support'>Version 1.0.0</Text>
                <Spacing type='sm' />
                <Text type='support'>Terms and Privacy</Text>
            </View>
        </View>
    )
}
