import logo from '../../assets/logo.png';
import Menu from '../../components/Menu';
import styled from 'styled-components';

const StyledHeader = styled.header`
    max-width: 1256px;
    padding: 40px 20px 63px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media (max-width: 768px) {
        padding: 20px;
    }

    & img {
        @media (max-width: 768px) {
            max-width: 145px;
        }
    }
`;

const Header = () => {
    return (
        <StyledHeader>
            <img src={logo} alt="Logo Kasa" />
            <Menu />
        </StyledHeader>
    );
};

export default Header;
