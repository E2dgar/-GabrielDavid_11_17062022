import PropTypes from 'prop-types';
import Footer from '../footer';
import Header from '../header';

/**
 * Component for page layout
 * @component
 */
const Layout = ({ children, content }) => {
    return (
        <>
            <Header />
            {children}
            <Footer content={content} />
        </>
    );
};

Layout.propTypes = {
    children: PropTypes.node.isRequired,
    content: PropTypes.object
};

export default Layout;
