import Footer from '../Footer';
import Header from '../Header';

const Layout = ({ children, content }) => {
    return (
        <>
            <Header />
            {children}
            <Footer content={content} />
        </>
    );
};

export default Layout;
