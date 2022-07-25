import logo from '../../assets/logo.png';
import Menu from '../../components/menu';
import './index.css';

/**
 * Component for showing Header
 * @component
 */
const Header = () => {
    return (
        <header>
            <img src={logo} alt="Logo Kasa" />
            <Menu />
        </header>
    );
};

export default Header;
