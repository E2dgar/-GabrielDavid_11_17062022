import PropTypes from 'prop-types';
import './index.css';

/**
 * Component for showing tag
 * @component
 */
const Tag = ({ content }) => {
    return <li className="tag">{content}</li>;
};

Tag.propTypes = {
    content: PropTypes.string.isRequired
};

export default Tag;
