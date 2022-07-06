import styled from 'styled-components';
import image from '../../assets/footer.png';
import { colors, fontSize } from '../../styles/constants';

const StyledFooter = styled.footer`
    width: 100%;
    background: ${colors.black};
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 66px 8px 30px;
    margin-top: auto;

    & p {
        font-size: ${fontSize.XL};

        @media (max-width: 768px) {
            font-size: ${fontSize.XS};
        }
    }
`;

const Footer = ({ content }) => {
    return (
        <StyledFooter>
            <img src={image} alt="Logo Kasa" />
            <p>{content?.copy}</p>
        </StyledFooter>
    );
};

export default Footer;
