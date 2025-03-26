import { createContext, useState, useContext, ReactNode } from "react";

type OrderByOption = "asc" | "desc";

interface FilterState {
    species: string;
    neutered: boolean | null;
    age: string | null;
    orderBy: OrderByOption;
}

const defaultFilterState: FilterState = {
    species: 'all',
    neutered: null,
    age: null,
    orderBy: 'desc',
};

interface AnimalFilterContextType {
    filter: FilterState;
    updateFilter: (newFilters: Partial<FilterState>) => void;
    resetFilter: () => void;
    buildQuery: (filter: FilterState) => string;
}

const AnimalFilterContext = createContext<AnimalFilterContextType>({
    filter: defaultFilterState,
    updateFilter: () => { },
    resetFilter: () => { },
    buildQuery: () => { return "" }
});

interface AnimalFilterProviderProps {
    children: ReactNode;
}

const buildQuery = (filter: FilterState) => {
    const params = new URLSearchParams();
    if (filter.species && filter.species !== "all") {
        params.append("species", filter.species);
    }

    if (filter.age !== null) {
        params.append("age", filter.age.toString());
    }

    params.append("orderBy", filter.orderBy);

    return params.toString();
};
export const AnimalFilterProvider: React.FC<AnimalFilterProviderProps> = ({ children }) => {
    const [filter, setFilter] = useState<FilterState>(defaultFilterState);

    const updateFilter = (newFilters: Partial<FilterState>) => {
        setFilter(prevFilter => ({
            ...prevFilter,
            ...newFilters,
        }));
    };
    const resetFilter = () => {
        setFilter(defaultFilterState);
    }
    return (
        <AnimalFilterContext.Provider value={{ filter, updateFilter, resetFilter, buildQuery }}>
            {children}
        </AnimalFilterContext.Provider>
    );
};

export const useAnimalFilter = () => useContext(AnimalFilterContext);
