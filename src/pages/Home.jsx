import Gallery from '../components/Layouts/Gallery';
import MainLayout from '../components/Layouts/Main';
import Hero from '../containers/Hero';
import image from '../assets/hero.jpg';
import { useFetch } from '../services/hook';
import { path } from '../services/api/api';
import renderData from '../services/renderDataState';

const Home = () => {
    const logements = useFetch(path.API_URL_LOGEMENTS);
    const contenus = useFetch(path.API_URL_CONTENUS);

    return (
        <MainLayout>
            {renderData(contenus) ? (
                <Hero data={contenus.data.home} background={image} />
            ) : (
                renderData(contenus)
            )}

            {renderData(logements) ? (
                <Gallery data={logements.data} />
            ) : (
                renderData(logements)
            )}
        </MainLayout>
    );
};

export default Home;
