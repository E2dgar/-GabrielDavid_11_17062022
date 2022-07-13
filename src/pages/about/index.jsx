import PropTypes from 'prop-types';
import './index.css';
import MainLayout from '../../components/layouts/main';
import Hero from '../../containers/hero';
import Paragraph from '../../atoms/texts/paragraph';
import Accordion from '../../components/accordion';
import { useEffect } from 'react';
import Layout from '../../containers/layout';

/**
 * Component for showing About page
 * @component
 */
const About = ({ content }) => {
    useEffect(() => {
        document.title = 'A propos';
    }, []);

    return (
        <Layout content={content.footer}>
            <MainLayout>
                <Hero className="about" />

                <dl>
                    {content?.about.map((elt) => (
                        <Accordion
                            key={elt.id}
                            label={elt.label}
                            component={<Paragraph content={elt.content} />}
                        />
                    ))}
                </dl>
            </MainLayout>
        </Layout>
    );
};

About.propTypes = {
    content: PropTypes.object.isRequired
};

export default About;
