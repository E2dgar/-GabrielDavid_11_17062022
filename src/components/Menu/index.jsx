import ItemMenu from '../../atoms/ItemMenu';
import styled from 'styled-components';

const StyledMenu = styled.ul`
    display: flex;
`;

const Menu = () => {
    return (
        <nav>
            <StyledMenu>
                <ItemMenu label="accueil" to="/" />
                <ItemMenu label="à propos" to="/about" />
            </StyledMenu>
        </nav>
    );
};

export default Menu;
