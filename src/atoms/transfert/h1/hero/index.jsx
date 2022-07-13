import PropTypes from 'prop-types';
import './index.css';

/**
 * Component for showing H1
 */
const H1Home = ({ content }) => {
    return <h1 className="h1-home">{content}</h1>;
};

H1Home.propTypes = {
    content: PropTypes.string.isRequired
};

export default H1Home;
