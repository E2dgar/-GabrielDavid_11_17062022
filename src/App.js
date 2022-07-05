import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Home from './pages/Home';
import About from './pages/About';
import Logement from './pages/Logement';
import GlobalStyle from './styles/global';
import Footer from './containers/Footer';
import P404 from './pages/404';
import Header from './containers/Header';
import { useFetch } from './services/hook';
import { path } from './services/api/api';
import Loader from './components/loader';

const App = () => {
    const {
        data: logements,
        isLoading: logementsIsLoading,
        error: logementError
    } = useFetch(path.API_URL_LOGEMENTS);
    const {
        data: content,
        isLoading: contentsIsLoading,
        error: contentError
    } = useFetch(path.API_URL_CONTENUS);

    if (logementsIsLoading || contentsIsLoading) {
        return <Loader />;
    }

    const datas = {
        home: content?.data?.home,
        footer: content?.data?.footer,
        about: content?.data?.about,
        P404: content?.data?.P404,
        logements: logements?.data
    };

    return (
        <Router>
            <GlobalStyle />
            <Header />

            <Routes>
                {/*} <Route
                    path="*"
                    element={
                        <P404 data={{ content: datas.P404, contentError }} />
                    }
                />*/}

                <Route
                    path="/"
                    element={
                        <Home
                            data={{
                                content: datas.home,
                                contentError,
                                logements: datas.logements,
                                logementError
                            }}
                        />
                    }
                />

                <Route
                    path="/about"
                    element={
                        <About data={{ content: datas.about, contentError }} />
                    }
                />
                <Route
                    path="/logement/:id"
                    element={
                        <Logement
                            data={{
                                logements: datas.logements,
                                logementError
                            }}
                        />
                    }
                />
            </Routes>

            <Footer data={{ content: datas.footer, contentError }} />
        </Router>
    );
};

export default App;
