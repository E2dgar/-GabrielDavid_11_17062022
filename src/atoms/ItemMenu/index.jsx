import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { colors, fontSize } from '../../styles/constants';

const StyledItem = styled.li`
    list-style: none;
    padding: 1rem;

    & a {
        color: ${colors.primary};
        text-decoration: none;
        text-transform: capitalize;
        font-size: ${fontSize.XL};
        margin-left: 5rem;

        &.active-link {
            text-decoration: underline;
        }
    }
`;

const ItemMenu = ({ label, to }) => {
    return (
        <StyledItem>
            <NavLink
                to={to}
                className={({ isActive }) =>
                    isActive ? 'active-link' : undefined
                }>
                {label}
            </NavLink>
        </StyledItem>
    );
};

export default ItemMenu;
