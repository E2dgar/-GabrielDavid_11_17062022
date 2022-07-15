import PropTypes from 'prop-types';
import Gallery from '../../components/layouts/gallery';
import MainLayout from '../../components/layouts/main';
import Layout from '../../containers/layout';
import Hero from '../../containers/hero';

/**
 * Component for showing Home page
 * @component
 */
const Home = ({ data, content }) => {
    return (
        <Layout content={content.footer}>
            <MainLayout>
                <Hero content={content.home} />

                <Gallery data={data} />
            </MainLayout>
        </Layout>
    );
};

Home.propTypes = {
    data: PropTypes.array.isRequired,
    content: PropTypes.object.isRequired
};

export default Home;
