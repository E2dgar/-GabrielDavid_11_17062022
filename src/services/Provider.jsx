import { useFetch } from './hook';
import { createContext } from 'react';

const DataContext = createContext();

const DataProvider = ({ children }) => {
    const { data, isLoading, error } = useFetch('data.json');

    console.log('dataProvidee', data);

    return (
        <DataContext.Provider value={{ data, isLoading, error }}>
            {children}
        </DataContext.Provider>
    );
};

export { DataProvider, DataContext };
