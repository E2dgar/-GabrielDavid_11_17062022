import styled from 'styled-components';
import { colors, fontSize } from '../../../styles/constants';

const StyledP = styled.p`
    color: ${colors.primary};
    font-size: ${fontSize.L};
    font-weight: 400;
    line-height: 1.4;
    padding: 18px;
    background-color: ${colors.toogle_bkg};
    text-align: left;

    @media (max-width: 768px) {
        font-size: ${fontSize.XS};
        padding: 22px 7px 52px 12px;
    }
`;

const Paragraph = ({ content }) => {
    return <StyledP>{content}</StyledP>;
};

export default Paragraph;
