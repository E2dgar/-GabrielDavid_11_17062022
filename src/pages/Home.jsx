import Gallery from '../components/Layouts/Gallery';
import MainLayout from '../components/Layouts/Main';
import Hero from '../containers/Hero';
import image from '../assets/hero.jpg';
import renderData from '../services/renderDataState';

const Home = ({ data }) => {
    return (
        <MainLayout>
            <Hero background={image} content={data?.content} />

            <Gallery data={data?.logements} />
        </MainLayout>
    );
};

export default Home;
