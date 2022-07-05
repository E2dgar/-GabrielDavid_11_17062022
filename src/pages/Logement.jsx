import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Avatar from '../atoms/Avatar';
import H1Logement from '../atoms/Texts/H1/Logement';
import H2 from '../atoms/Texts/H2';
import Tag from '../atoms/Tag/Tag';
import MainLayout from '../components/Layouts/Main';
import { path } from '../services/api/api';
import { useFetch } from '../services/hook';
import Rate from '../atoms/Rate.jsx';
import Toogle from '../components/Toogle';
import ToogleHeading from '../atoms/ToogleHeading';
import Paragraph from '../atoms/Texts/Paragraph';
import List from '../atoms/Liste';
import Slider from '../containers/Slider';

const Logement = ({ data }) => {
    const { id } = useParams();

    const [logement, setLogement] = useState({});

    useEffect(() => {
        setLogement(data?.logements?.filter((elt) => elt.id === id)[0]);
    }, [data, id]);

    useEffect(() => {
        document.title = logement.title;
    });

    console.log(logement);

    return (
        <MainLayout>
            <Slider content={logement.pictures} />
            <H1Logement>{logement?.title}</H1Logement>
            <H2>{logement?.location}</H2>
            <Avatar data={logement?.host} />
            <div>
                {logement?.tags?.map((tag, index) => (
                    <Tag key={index}>{tag}</Tag>
                ))}
            </div>
            <Rate rating={parseInt(logement?.rating)} />
            <Toogle
                label="Description"
                component={<Paragraph content={logement?.description} />}
            />
            <Toogle
                label="Équipements"
                component={<List content={logement?.equipments} />}
            />
        </MainLayout>
    );
};

export default Logement;
