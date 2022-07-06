import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Avatar from '../atoms/Avatar';
import H1Logement from '../atoms/Texts/H1/Logement';
import H2 from '../atoms/Texts/H2';
import Tag from '../atoms/Tag/Tag';
import MainLayout from '../components/Layouts/Main';
import Rate from '../atoms/Rate.jsx';
import Toogle from '../components/Toogle';
import Paragraph from '../atoms/Texts/Paragraph';
import List from '../atoms/Liste';
import Slider from '../containers/Slider';
import Layout from '../containers/Layout';

const Logement = ({ data, content }) => {
    const { id } = useParams();
    const [logement, setLogement] = useState();

    useEffect(() => {
        setLogement(data?.filter((elt) => elt.id === 12)[0]);
        document.title = logement?.title;
    }, [data, content, id, logement]);

    if (!logement) {
        /*TODO redirection 404 si mauvais id*/
    }

    return (
        <Layout content={content?.footer}>
            <MainLayout>
                <Slider content={logement?.pictures} />

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
        </Layout>
    );
};

export default Logement;
