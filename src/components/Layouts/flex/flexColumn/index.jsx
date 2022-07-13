import './index.css';
import PropTypes from 'prop-types';

const FlexColumnContainer = ({ children, className }) => {
    return <div className={`flex-column ${className || ''}`}>{children}</div>;
};

FlexColumnContainer.propTypes = {
    children: PropTypes.node.isRequired
};

export default FlexColumnContainer;
