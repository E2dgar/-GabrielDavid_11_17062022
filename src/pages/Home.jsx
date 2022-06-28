import React, { useState, useEffect } from 'react';
import Tag from '../components/Tag/Tag';
import Select from '../components/Select/Accordion';
import Gallery from '../components/Layouts/Gallery';
import { useContext } from 'react';
import { DataContext } from '../services/Provider';
import MainLayout from '../components/Layouts/Gallery/Main';
import Hero from '../containers/Hero';

const Home = () => {
    const { data } = useContext(DataContext);
    const logementsData = data[0];
    const siteData = data[1];

    return (
        <MainLayout>
            <Hero data={siteData} />

            {logementsData.error ? (
                <p>erreur</p>
            ) : logementsData.isLoading ? (
                <p>load</p>
            ) : (
                <Gallery data={logementsData.data} />
            )}
        </MainLayout>
    );
};

export default Home;
