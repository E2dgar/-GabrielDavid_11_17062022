import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Avatar from '../atoms/avatar';
import H1Logement from '../atoms/Texts/H1/logement';
import H2 from '../atoms/Texts/H2';
import Tag from '../atoms/tag';
import MainLayout from '../components/Layouts/Main';
import Rate from '../atoms/rate/index.jsx';
import Toogle from '../components/Toogle';
import Paragraph from '../atoms/Texts/Paragraph';
import List from '../atoms/list';
import Slider from '../containers/Slider';
import Layout from '../containers/Layout';
import Loader from '../atoms/loader';
import FlexBetweenContainer from '../components/Layouts/flex/flexBetween';
import TagsList from '../components/tagList';
import FlexColumnContainer from '../components/Layouts/flex/flexColumn';
import './index.css';

const Logement = ({ data, content }) => {
    const { id } = useParams();
    const [logement, setLogement] = useState();

    useEffect(() => {
        setLogement(data.filter((elt) => elt.id === id)[0]);
        document.title = logement?.title;
    }, [data, content, id, logement]);

    if (!logement || !content) {
        return <Loader />;
    }
    /*TODO redirection 404 si mauvais id*/

    return (
        <Layout content={content.footer}>
            <MainLayout>
                <Slider content={logement?.pictures} />

                <FlexBetweenContainer className="logement-heading">
                    <FlexColumnContainer className="logement-heading-left">
                        <H1Logement content={logement?.title} />

                        <H2>{logement?.location}</H2>

                        <TagsList logement={logement} />
                    </FlexColumnContainer>

                    <FlexColumnContainer className="logement-heading-right">
                        <Avatar data={logement.host} />

                        <Rate rating={parseInt(logement?.rating)} />
                    </FlexColumnContainer>
                </FlexBetweenContainer>

                <FlexBetweenContainer className="logement-accordions">
                    <Toogle
                        className="logement-accordion"
                        label="Description"
                        component={
                            <Paragraph content={logement?.description} />
                        }
                    />

                    <Toogle
                        className="logement-accordion"
                        label="Équipements"
                        component={<List content={logement?.equipments} />}
                    />
                </FlexBetweenContainer>
            </MainLayout>
        </Layout>
    );
};

export default Logement;
