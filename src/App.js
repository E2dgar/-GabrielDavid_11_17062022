import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Logement from './pages/Logement';
import GlobalStyle from './styles/global';
import { useFetch } from './services/hook';
import { path } from './services/api/api';
import Loader from './atoms/loader';
import About from './pages/About';
import P404 from './pages/404';

const App = () => {
    const {
        data: logements,
        isLoading: logementsIsLoading,
        error: logementsError
    } = useFetch(path.API_URL_LOGEMENTS);

    const {
        data: content,
        isLoading: contentIsLoading,
        error: contentError
    } = useFetch(path.API_URL_CONTENUS);

    if (logementsIsLoading || contentIsLoading) {
        return <Loader />;
    }
    if (logementsError || contentError) {
        return <p style={{ color: 'red' }}>Erreur</p>;
    }

    return (
        <Router>
            <GlobalStyle />

            <Routes>
                <Route path="*" element={<P404 content={content} />} />

                <Route
                    path="/"
                    element={<Home data={logements} content={content} />}
                />

                <Route path="/about" element={<About content={content} />} />

                <Route
                    path="/logement/:id"
                    element={<Logement data={logements} content={content} />}
                />
            </Routes>
        </Router>
    );
};

export default App;
