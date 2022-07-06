import Gallery from '../components/Layouts/Gallery';
import MainLayout from '../components/Layouts/Main';
import Layout from '../containers/Layout';
import Hero from '../containers/Hero';
import { useFetch } from '../services/hook';
import { path } from '../services/api/api';
import Loader from '../atoms/Loader';

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
