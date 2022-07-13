import PropTypes from 'prop-types';
import './index.css';

/**
 * Component for showing h2
 * @component
 */
const H2 = ({ content }) => {
    return <h2>{content}</h2>;
};

H2.propTypes = {
    content: PropTypes.string.isRequired
};

export default H2;
