import React, { useState, useEffect } from 'react';
import Tag from '../components/Tag/Tag';
import Select from '../components/Select/Accordion';
import Gallery from '../components/Galleries/Gallery';
import { useFetch } from '../services/hook';
import { path } from '../constants';
import Loader from '../components/loader';
import { useContext } from 'react';
import { DataContext } from '../services/Provider';

const Home = () => {
    const { data } = useContext(DataContext);

    console.log('data', data);
    return (
        <>
            <h1>C'est la home</h1>
            <Tag tag="Un tag" />
            <Select label="Equipement" panelType="text" />
            {data.error ? (
                <p>erreur</p>
            ) : data.isLoading ? (
                <p>load</p>
            ) : (
                <Gallery data={data} />
            )}
        </>
    );
};

export default Home;
