import { View, StyleSheet } from 'react-native';
import { useAnimalFilter } from '@/modules/animal/presentation/FilterContext';
import AnimalLabel from './AnimalLabel';
import { colors, spacing } from '@/modules/shared/themes/styles';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useTheme } from '@react-navigation/native';

const orderByDisplayText = {
    "desc": "Newest rescues",
    "asc": "Longest Residents"
};

export default function AnimalFilter() {
    const { filter } = useAnimalFilter();
    const theme = useTheme();
    return (
        <View style={styles.container}>
            <View style={styles.labelGroup}>
                <AnimalLabel labelText={filter.species} isActive={true} />
                {filter.age && <AnimalLabel labelText={`${filter.age}`} isActive={true} />}
                <AnimalLabel labelText={orderByDisplayText[filter.orderBy as "asc" | "desc"]} isActive={true} ></AnimalLabel>
            </View>
            <Ionicons name="options" size={28} color={theme.colors.text} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        flexWrap: "wrap-reverse",
        gap: spacing.md,
        justifyContent: 'space-between',
        width: '100%',
        paddingHorizontal: spacing.md
    },
    labelGroup: {
        flexDirection: 'row',
        gap: spacing.md
    }
});
