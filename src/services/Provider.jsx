import { useFetch } from './hook';
import { createContext } from 'react';

const DataContext = createContext();

const DataProvider = ({ children }) => {
    const data = [useFetch('data.json'), useFetch('site_data.json')];

    /*const { logementsData, isLoading, error } = useFetch('data.json');
    const { siteData, isLoading, error } = useFetch('site_data.json');*/

    console.log('dataProvidee', data);

    return (
        <DataContext.Provider value={{ data }}>{children}</DataContext.Provider>
    );
};

export { DataProvider, DataContext };
