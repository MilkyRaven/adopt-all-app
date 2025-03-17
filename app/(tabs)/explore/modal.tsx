import { View, Text, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { useAnimalFilter } from '@/modules/animal/presentation/FilterContext';
import { Link } from 'expo-router';

// Define the possible filter values here
const speciesOptions = ["any", "cat", "dog", "rat", "pig"];
const ageOptions = ["null", "junior", "mid", "senior"];
const orderByOptions = ["desc", "asc"];

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
        <View>
            <Text>Filter By</Text>

            {/* Order By Filter */}
            <Text>Order By: {tempFilters.orderBy}</Text>
            {orderByOptions.map((order) => (
                <TouchableOpacity key={order} onPress={() => setTempFilters({ ...tempFilters, orderBy: order })}>
                    <Text>{order}</Text>
                </TouchableOpacity>
            ))}

            {/* Species Filter */}
            <Text>Species: {tempFilters.species}</Text>
            {speciesOptions.map((species) => (
                <TouchableOpacity key={species} onPress={() => setTempFilters({ ...tempFilters, species: species })}>
                    <Text>{species}</Text>
                </TouchableOpacity>
            ))}

            {/* Neutered Filter */}
            <Text>Neutered? {tempFilters.neutered === null ? "Any" : tempFilters.neutered ? "Yes" : "No"}</Text>
            <TouchableOpacity onPress={() => setTempFilters({ ...tempFilters, neutered: !tempFilters.neutered })}>
                <Text>Toggle Neutered</Text>
            </TouchableOpacity>

            {/* Age Filter */}
            <Text>Age: {tempFilters.age || "Any"}</Text>
            {ageOptions.map((age) => (
                <TouchableOpacity key={age} onPress={() => setTempFilters({ ...tempFilters, age: age === "null" ? null : age })}>
                    <Text>{age === "null" ? "Any" : age}</Text>
                </TouchableOpacity>
            ))}
            {/* Apply and Reset Buttons */}
            <Link href="../" onPress={handleApply}>
                <Text>Apply Filters</Text>
            </Link>
            <Link href="../" onPress={handleReset}>
                <Text>Reset</Text>
            </Link>
        </View>
    );
}
