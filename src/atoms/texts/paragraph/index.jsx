import PropTypes from 'prop-types';
import './index.css';

/**
 * Component for showing p in accordion
 * @component
 */
const Paragraph = ({ content }) => {
    return <p className="text">{content}</p>;
};

Paragraph.propTypes = {
    content: PropTypes.string.isRequired
};

export default Paragraph;
