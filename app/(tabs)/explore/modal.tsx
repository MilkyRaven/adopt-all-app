import { View, TouchableOpacity } from 'react-native';
import Text from '@/modules/shared/custom/Text';
import React, { useState } from 'react';
import { useAnimalFilter } from '@/modules/animal/presentation/FilterContext';
import AnimalLabel from '@/modules/animal/presentation/AnimalLabel';
import Spacing from '@/modules/shared/custom/Spacing';
import Button from '@/modules/shared/custom/Button';
import { spacing } from '@/modules/shared/themes/styles';
import LineBreak from '@/modules/shared/custom/LineBreak';

const speciesOptions = ["Cat", "Dog", "Rat", "Pig"];
const ageOptions = ["Junior", "Mid", "Senior"];
const orderByOptions = ["desc", "asc"] as const;
type OrderByOption = typeof orderByOptions[number];

const orderByDisplayText: Record<OrderByOption, string> = {
    "desc": "Newest rescues",
    "asc": "Longest Residents"
};

export default function AnimalFilterSelection() {
    const { filter, updateFilter, resetFilter } = useAnimalFilter();

    const [tempFilters, setTempFilters] = useState({ ...filter });

    const handleApply = () => {
        updateFilter(tempFilters)
    };

    const handleReset = () => {
        setTempFilters({ species: 'any', neutered: null, age: null, orderBy: 'desc' })
        resetFilter();
    };

    return (
        <View style={{ padding: spacing.md }}>
            <View>
                <Text type='h2'>Sort By</Text>
                <LineBreak />
                <Spacing type='sm' />
                <View style={{ flexDirection: 'row', gap: 8 }}>
                    {orderByOptions.map((order) => (
                        <TouchableOpacity key={order} onPress={() => setTempFilters({ ...tempFilters, orderBy: order })}>
                            <AnimalLabel labelText={orderByDisplayText[order]} isActive={tempFilters.orderBy === order} />
                        </TouchableOpacity>
                    ))}
                </View>
            </View>
            <Spacing type='lg' />
            <View>
                <Text type='h2'>Filter by</Text>
                <LineBreak />
                <Spacing type='sm' />
                <Text type='h3'>Species</Text>
                <Spacing type='sm' />
                <View style={{ flexDirection: 'row', gap: 8 }}>
                    {speciesOptions.map((species) => (
                        <TouchableOpacity key={species} onPress={() => setTempFilters({ ...tempFilters, species: species })}>
                            <AnimalLabel labelText={species} isActive={tempFilters.species === species} />
                        </TouchableOpacity>
                    ))}
                </View>
            </View>
            <Spacing type='md' />
            <View>
                <Text type='h3'>Age</Text>
                <Spacing type='sm' />
                <View style={{ flexDirection: 'row', gap: 8 }}>
                    {ageOptions.map((age) => (
                        <TouchableOpacity key={age} onPress={() => setTempFilters({ ...tempFilters, age: age === "null" ? null : age })}>
                            <AnimalLabel labelText={age} isActive={tempFilters.age === age} />
                        </TouchableOpacity>
                    ))}
                </View>
            </View>
            <Spacing type='xl' />
            <View style={{ flexDirection: 'row', gap: 8, alignSelf: "center" }}>
                <Button title="Clear Filters" href="../" onPress={handleReset} />
                <Button title="Show results" href="../" onPress={handleApply} />
            </View>
        </View>
    );
}
