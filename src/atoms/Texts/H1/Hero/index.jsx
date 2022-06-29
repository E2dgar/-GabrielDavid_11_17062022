import styled from 'styled-components';
import { fontSize } from '../../../../styles/constants';

const StyledTitle = styled.h1`
    font-size: ${fontSize.home_H1};
    position: relative;
    text-align: center;
    z-index: 10;

    @media (max-width: 768px) {
        font-size: ${fontSize.XL};
        text-align: left;
        max-width: 19ch;
    }
`;

const H1Hero = ({ text }) => {
    return <StyledTitle>{text}</StyledTitle>;
};

export default H1Hero;
