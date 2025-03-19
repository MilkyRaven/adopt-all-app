import { View, StyleSheet } from 'react-native';
import { useAnimalFilter } from '@/modules/animal/presentation/FilterContext';
import AnimalLabel from './AnimalLabel';
import { colors, spacing } from '@/modules/shared/themes/styles';

const orderByDisplayText = {
    "desc": "Newest rescues",
    "asc": "Longest Residents"
};

export default function AnimalFilter() {
    const { filter } = useAnimalFilter();

    return (
        <View style={styles.container}>
            <View style={styles.labelGroup}>
                <AnimalLabel labelText={filter.species} isActive={true} />
                {filter.age && <AnimalLabel labelText={`${filter.age}`} isActive={true} />}
                <AnimalLabel labelText={orderByDisplayText[filter.orderBy as "asc" | "desc"]} isActive={true} ></AnimalLabel>
            </View>
            <View style={styles.icon}></View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        paddingHorizontal: spacing.md
    },
    labelGroup: {
        flexDirection: 'row',
        gap: spacing.md
    },
    icon: {
        width: 25,
        height: '100%',
        backgroundColor: colors.background
    }
});
