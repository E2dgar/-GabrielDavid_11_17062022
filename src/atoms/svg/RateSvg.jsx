import styled from 'styled-components';
import { colors } from '../../styles/constants';

const StyledSvg = styled.svg`
    width: 30px;
    height: 30;
    fill: none;

    path {
        fill: ${(props) => (props.checked ? colors.primary : colors.main_bkg)};
    }
`;

const RateSvg = ({ checked }) => {
    return (
        <StyledSvg
            viewBox="0 0 30 30"
            xmlns="http://www.w3.org/2000/svg"
            checked={checked}>
            <path d="M18.645 12L15 0L11.355 12H0L9.27 18.615L5.745 30L15 22.965L24.27 30L20.745 18.615L30 12H18.645Z" />
        </StyledSvg>
    );
};

export default RateSvg;
