import PropTypes from 'prop-types';
import './index.css';
import image from '../../assets/footer.png';

/**
 * Component for showing Footer
 * @component
 */
const Footer = ({ content }) => {
    return (
        <footer>
            <img src={image} alt="Logo Kasa" />
            <p>{content.copy}</p>
        </footer>
    );
};

Footer.propTypes = {
    content: PropTypes.object.isRequired
};

export default Footer;
