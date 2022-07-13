import './index.css';
import PropTypes from 'prop-types';

/**
 * Component for showing flex row container
 * @component
 */
const FlexBetweenContainer = ({ children, className }) => {
    return <div className={`flex-between ${className || ''}`}>{children}</div>;
};

FlexBetweenContainer.propTypes = {
    children: PropTypes.node.isRequired
};

export default FlexBetweenContainer;
