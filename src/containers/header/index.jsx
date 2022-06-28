import logo from '../../assets/logo.png';
import Menu from '../../components/Menu';
import styled from 'styled-components';

const StyledHeader = styled.header`
    max-width: 1256px;
    padding: 0 8px;
    margin: 40px auto 63px;
    display: flex;
    justify-content: space-between;
    align-items: center;
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
