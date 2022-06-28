import hero from '../../assets/hero.jpg';
import H1Hero from '../../atoms/items-menu/Texts/H1/Hero';
import image from '../../assets/hero.jpg';
import { useContext } from 'react';
import { DataContext } from '../../services/Provider';
import styled from 'styled-components';
import { colors } from '../../styles/constants';

const StyledHero = styled.div`
    max-width: 100%;
    padding: 1.6rem;
    height: 223px;
    background-image: url(${image});
    border-radius: 10px;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;

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

const Hero = ({ data }) => {
    console.log('hero', data.data.siteText[0].home.h1);
    return (
        <StyledHero>
            <H1Hero text={data.data.siteText[0].home.h1} />
        </StyledHero>
    );
};

export default Hero;
