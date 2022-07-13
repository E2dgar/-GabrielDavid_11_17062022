import PropTypes from 'prop-types';
import './index.css';

/**
 * Component for Main tag
 * @component
 */
const MainLayout = ({ children }) => {
    return <main>{children}</main>;
};

MainLayout.propTypes = {
    children: PropTypes.node.isRequired
};

export default MainLayout;
