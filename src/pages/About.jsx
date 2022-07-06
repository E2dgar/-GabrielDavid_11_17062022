import MainLayout from '../components/Layouts/Main';
import Hero from '../containers/Hero';
import image from '../assets/about.jpg';
import Paragraph from '../atoms/Texts/Paragraph';
import Toogle from '../components/Toogle';
import styled from 'styled-components';
import { useEffect } from 'react';
import Layout from '../containers/Layout';

const ToogleList = styled.dl`
    max-width: 1022px;
    margin: 0 auto 4rem;
`;

const About = ({ content }) => {
    useEffect(() => {
        document.title = 'A propos';
    }, []);

    return (
        <Layout content={content.footer}>
            <MainLayout>
                <Hero background={image} content={content.home} />

                <ToogleList>
                    {content?.about.map((elt) => (
                        <Toogle
                            key={elt.id}
                            label={elt.label}
                            component={<Paragraph content={elt.content} />}
                        />
                    ))}
                </ToogleList>
            </MainLayout>
        </Layout>
    );
};

export default About;
