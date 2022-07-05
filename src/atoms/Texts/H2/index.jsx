import styled from 'styled-components';
import { colors, fontSize } from '../../../styles/constants';

const StyledTitle = styled.h2`
    font-size: ${fontSize.L};
    color: ${colors.primary};
    position: relative;
    text-align: center;
    z-index: 10;

    @media (max-width: 768px) {
        font-size: ${fontSize.L};
        text-align: left;
    }
`;

const H2 = ({ children }) => {
    return <StyledTitle>{children}</StyledTitle>;
};

export default H2;
