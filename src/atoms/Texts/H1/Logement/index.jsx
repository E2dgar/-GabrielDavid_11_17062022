import styled from 'styled-components';
import { colors, fontSize } from '../../../../styles/constants';

const StyledTitle = styled.h1`
    font-size: ${fontSize.single_H1};
    color: ${colors.primary};
    position: relative;
    text-align: center;
    z-index: 10;

    @media (max-width: 768px) {
        font-size: ${fontSize.XL};
        text-align: left;
    }
`;

const H1Logement = ({ children }) => {
    return <StyledTitle>{children}</StyledTitle>;
};

export default H1Logement;
