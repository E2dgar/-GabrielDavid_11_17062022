import { useState, useEffect } from 'react';
import { useParams, useNavigate, Navigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import './index.css';
import Avatar from '../../components/avatar';
import H1Logement from '../../atoms/texts/h1/logement';
import H2 from '../../atoms/texts/h2';
import MainLayout from '../../components/layouts/main';
import Rate from '../../atoms/rate/index.jsx';
import Accordion from '../../components/accordion';
import Paragraph from '../../atoms/texts/paragraph';
import List from '../../atoms/list';
import Slider from '../../components/slider';
import Layout from '../../containers/layout';
import FlexBetweenContainer from '../../components/layouts/flex/flexBetween';
import TagsList from '../../components/tagList';
import FlexColumnContainer from '../../components/layouts/flex/flexColumn';
import Loader from '../../atoms/loader';

/**
 * Component for showing Logement page
 * @component
 */
const Logement = ({ data, content }) => {
    const { id } = useParams();
    const [logement, setLogement] = useState(null);

    useEffect(() => {
        setLogement(data.filter((elt) => elt.id === id)[0]);

        document.title = logement?.title;
    }, [data, content, id, logement]);

    if (logement === null) {
        return <Loader />;
    }
    /*Renvoie vers la 404 si un ID inexistant de logement est entré dans l'URL*/
    if (logement === undefined) {
        return <Navigate replace to="/error" />;
    }

    return (
        <Layout content={content.footer}>
            <MainLayout>
                <Slider content={logement.pictures} />

                <FlexBetweenContainer className="logement-heading">
                    <FlexColumnContainer className="logement-heading-left">
                        <H1Logement content={logement.title} />

                        <H2 content={logement.location} />

                        <TagsList logement={logement} />
                    </FlexColumnContainer>

                    <FlexColumnContainer className="logement-heading-right">
                        <Avatar data={logement.host} />

                        <Rate rating={parseInt(logement.rating)} />
                    </FlexColumnContainer>
                </FlexBetweenContainer>

                <FlexBetweenContainer className="logement-accordions">
                    <Accordion
                        className="logement-accordion"
                        label="Description"
                        component={<Paragraph content={logement.description} />}
                    />

                    <Accordion
                        className="logement-accordion"
                        label="Équipements"
                        component={<List content={logement?.equipments} />}
                    />
                </FlexBetweenContainer>
            </MainLayout>
        </Layout>
    );
};

Logement.propTypes = {
    data: PropTypes.array.isRequired,
    content: PropTypes.object.isRequired
};

export default Logement;
