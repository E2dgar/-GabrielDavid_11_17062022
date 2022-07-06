import MainLayout from '../components/Layouts/Main';
import Hero from '../containers/Hero';
import image from '../assets/about.jpg';
import Paragraph from '../atoms/Texts/Paragraph';
import Toogle from '../components/Toogle';
import styled from 'styled-components';
import { useEffect } from 'react';

const ToogleList = styled.dl`
    max-width: 1022px;
    margin: 0 auto 4rem;
`;

const About = ({ data }) => {
    useEffect(() => {
        document.title = 'A propos';
    }, []);

    return (
        <MainLayout>
            <Hero background={image} />

            <ToogleList>
                {data.map((elt) => (
                    <Toogle
                        key={elt.id}
                        label={elt.label}
                        component={<Paragraph content={elt.content} />}
                    />
                ))}
            </ToogleList>
        </MainLayout>
    );
};

export default About;
