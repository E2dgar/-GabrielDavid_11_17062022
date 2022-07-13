import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import './index.css';

/**
 * Component for showing menu item
 *
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
    /**
     * Item label
     */
    label: PropTypes.string.isRequired,
    /**
     * Item to
     */
    to: PropTypes.string.isRequired
};

export default ItemMenu;
