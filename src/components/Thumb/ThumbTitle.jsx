import styled from 'styled-components';
import { fontSize } from '../../styles/constants';

const StyledTitle = styled.h2`
    line-height: 1.4;
    max-width: 11ch;
    margin: 0;
    grid-area: 1 / 1 / 2 / 2;
    margin-left: 20px;
    display: flex;
    text-align: left;
    z-index: 2;
`;

const ThumbTitle = ({ children }) => {
    return <StyledTitle>{children}</StyledTitle>;
};

export default ThumbTitle;
