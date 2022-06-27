import styled from 'styled-components';
import { colors, fontSize } from '../../styles/constants';

const StyledTag = styled.div`
    border-radius: 100vmax;
    padding: 3px 22px;
    background-color: ${colors.primary};
    max-width: max-content;
    font-size: ${fontSize.M};
    line-height: 1.4;

    @media (max-width: 768px) {
        font-size: ${fontSize.XXS};
    }
`;

const Tag = ({ tag }) => {
    return <StyledTag className="tag">{tag}</StyledTag>;
};

export default Tag;
