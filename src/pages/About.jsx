import MainLayout from '../components/Layouts/Main';
import Hero from '../containers/Hero';
import image from '../assets/about.jpg';
import Paragraph from '../atoms/Texts/Paragraph';
import { useFetch } from '../services/hook';
import { path } from '../services/api/api';
import Toogle from '../components/Toogle';
import styled from 'styled-components';

const StyledDl = styled.dl`
    max-width: 1022px;
    margin: auto;
`;

const About = () => {
    const content = useFetch(path.API_URL_CONTENUS);
    console.log('c', content);
    return (
        <MainLayout>
            <Hero background={image} />
            <StyledDl>
                {content?.data?.about?.map((elt) => (
                    <Toogle
                        key={elt.id}
                        label={elt.label}
                        component={<Paragraph content={elt.content} />}
                    />
                ))}
            </StyledDl>
        </MainLayout>
    );
};

export default About;
