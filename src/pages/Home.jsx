import Gallery from '../components/Layouts/Gallery';
import MainLayout from '../components/Layouts/Main';
import Layout from '../containers/Layout';
import Hero from '../containers/Hero';

const Home = ({ data, content }) => {
    return (
        <Layout content={content?.footer}>
            <MainLayout>
                <Hero content={content?.home} />

                <Gallery data={data} />
            </MainLayout>
        </Layout>
    );
};

export default Home;
