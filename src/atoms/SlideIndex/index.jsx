import styled from 'styled-components';
import { fontSize } from '../../styles/constants';

const StyledP = styled.p`
    font-size: ${fontSize.L};
    postion: absolute;
    bottom: 15px;
    left: 50%;
`;

const SlideIndex = ({ index, length }) => {
    return (
        <StyledP>
            {index}/{length}
        </StyledP>
    );
};

export default SlideIndex;
