import React, { createContext, useContext, useState, ReactNode } from 'react';
import { User, defaultUser } from '../domain/entities/User';

interface UserContextType {
    user: User;
    setUser: (user: User) => void;
    updateUser: (userData: Partial<User>) => void;
    clearUser: () => void;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

interface UserProviderProps {
    children: ReactNode;
}

export const UserProvider: React.FC<UserProviderProps> = ({ children }) => {
    const [user, setUser] = useState<User>(defaultUser);

    const updateUser = (userData: Partial<User>) => {
        setUser(prevUser => ({
            ...prevUser,
            ...userData
        }));
    };

    const clearUser = () => {
        setUser(defaultUser);
    };

    return (
        <UserContext.Provider value={{ user, setUser, updateUser, clearUser }}>
            {children}
        </UserContext.Provider>
    );
};

export const useUser = (): UserContextType => {
    const context = useContext(UserContext);
    if (context === undefined) {
        throw new Error('use User must be used within a User Provider! 🐷');
    }
    return context;
};
