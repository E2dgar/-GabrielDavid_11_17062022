import H1Hero from '../../atoms/Texts/H1/hero';
import styled from 'styled-components';
import { colors } from '../../styles/constants';
import image from '../../assets/hero.jpg';
import H1Home from '../../atoms/Texts/H1/hero';

const StyledHero = styled.div`
    max-width: 100%;
    padding: 1.6rem;
    height: 223px;
    background-image: ${(props) => `url(${props.background})`};
    border-radius: 10px;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;

    @media (max-width: 768px) {
        height: 111px;
    }

    &::after {
        content: '';
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        background-color: ${colors.banner_overlay};
        border-radius: 10px;
        z-index: 1;
    }

    @media (max-width: 768px) {
        justify-content: flex-start;
    }
`;

const Hero = ({ content }) => {
    return (
        <StyledHero background={image}>
            <H1Home content={content?.h1} />
        </StyledHero>
    );
};

export default Hero;
