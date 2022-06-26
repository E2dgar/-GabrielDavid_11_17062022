import React, { useState, useEffect } from 'react';
import Tag from '../components/Tag/Tag';
import Select from '../components/Select/Accordion';
import Gallery from '../components/Galleries/Gallery';

const Home = () => {
    const [isDataLoading, setDataLoading] = useState(false);
    const [logement, setLogements] = useState([]);

    useEffect(() => {
        setDataLoading(true);
        fetch('http://localhost:3000/data.json', {
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json'
            }
        }).then((response) =>
            response.json().then((logement) => {
                console.log('fetc', logement);
                setLogements(logement);
                setDataLoading(false);
            })
        );
    }, []);

    console.log('test', typeof logement);
    return (
        <>
            <h1>C'est la home</h1>
            <Tag tag="Un tag" />
            <Select label="Equipement" panelType="text" data={logement} />
            {isDataLoading ? (
                <div>Loading...</div>
            ) : (
                <Gallery data={logement} />
            )}
        </>
    );
};

export default Home;
