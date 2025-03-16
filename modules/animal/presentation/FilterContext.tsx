import { createContext, useState, useContext, ReactNode } from "react";

interface FilterState {
    species: string;
    neutered: boolean | null;
    age: string | null;
    orderBy: string; //asc | desc
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
}

const AnimalFilterContext = createContext<AnimalFilterContextType>({
    filter: defaultFilterState,
    updateFilter: () => { },
    resetFilter: () => { }
});

interface AnimalFilterProviderProps {
    children: ReactNode;
}

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
        <AnimalFilterContext.Provider value={{ filter, updateFilter, resetFilter }}>
            {children}
        </AnimalFilterContext.Provider>
    );
};

export const useAnimalFilter = () => useContext(AnimalFilterContext);
