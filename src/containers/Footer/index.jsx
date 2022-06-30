import styled from 'styled-components';
import image from '../../assets/footer.png';
import { path } from '../../services/api/api';
import { useFetch } from '../../services/hook';
import renderData from '../../services/renderDataState';
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

const Footer = () => {
    const contenus = useFetch(path.API_URL_CONTENUS);

    return (
        <StyledFooter>
            <img src={image} alt="Logo Kasa" />

            {renderData(contenus) ? (
                <p>{contenus.data?.footer?.copy}</p>
            ) : (
                renderData(contenus)
            )}
        </StyledFooter>
    );
};

export default Footer;
