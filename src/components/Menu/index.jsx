import './index.css';
import ItemMenu from '../../atoms/itemMenu';

/**
 * Component for showing Nav
 * @component
 */

const Menu = () => {
    return (
        <nav>
            <ul className="menu-list">
                <ItemMenu label="accueil" to="/" />
                <ItemMenu label="à propos" to="/about" />
            </ul>
        </nav>
    );
};

export default Menu;
