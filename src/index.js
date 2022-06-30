import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './containers/Header';
import reportWebVitals from './reportWebVitals';
import Home from './pages/Home';
import About from './pages/About';
import Peror from './pages/404';
import Logement from './pages/Logement';
import GlobalStyle from './styles/global';
import Footer from './containers/Footer';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <React.StrictMode>
        <Router>
            <GlobalStyle />
            <div className="app">
                <Header />

                <Routes>
                    <Route path="*" element={<Peror />} />
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/logement/:id" element={<Logement />} />
                </Routes>

                <Footer />
            </div>
        </Router>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
