import { View, Text } from 'react-native';
import { useAnimalFilter } from '@/modules/animal/presentation/FilterContext';

export default function AnimalFilter() {
    const { filter } = useAnimalFilter();

    return (
        <View>
            <View >
                <Text>Current Filters</Text>
                <Text>Species: {filter.species}</Text>
                <Text>Neutered: {filter.neutered === null ? "Any" : filter.neutered ? "Yes" : "No"}</Text>
                <Text>Age: {filter.age || "Any"}</Text>
                <Text>Order By: {filter.orderBy}</Text>
            </View>
        </View>
    );
}