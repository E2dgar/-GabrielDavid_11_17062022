import PropTypes from 'prop-types';
import './index.css';
import { NavLink } from 'react-router-dom';

/**
 * Component for showing menu item
 * @component
 */

const ItemMenu = ({ label, to }) => {
    return (
        <li className="menu-item">
            <NavLink
                to={to}
                className={({ isActive }) =>
                    isActive ? 'active-link' : undefined
                }>
                {label}
            </NavLink>
        </li>
    );
};

ItemMenu.propTypes = {
    label: PropTypes.string.isRequired,
    to: PropTypes.string.isRequired
};

export default ItemMenu;
