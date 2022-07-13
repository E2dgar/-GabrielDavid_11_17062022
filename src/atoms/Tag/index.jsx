import PropTypes from 'prop-types';
import './index.css';

const Tag = ({ children }) => {
    return <li className="tag">{children}</li>;
};

Tag.propTypes = {
    children: PropTypes.string.isRequired
};

export default Tag;
