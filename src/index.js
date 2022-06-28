import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './containers/header';
import reportWebVitals from './reportWebVitals';
import Home from './pages/Home';
import Essai from './pages/Essai';
import Peror from './pages/404';
import Logement from './pages/Logement';
import GlobalStyle from './styles/global';
import { DataProvider } from './services/Provider';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <React.StrictMode>
        <Router>
            <GlobalStyle />
            <Header />
            <DataProvider>
                <Routes>
                    <Route path="*" element={<Peror />} />
                    <Route path="/" element={<Home />} />
                    <Route path="/test" element={<Essai />} />
                    <Route path="/logement/:id" element={<Logement />} />
                </Routes>
            </DataProvider>
        </Router>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
