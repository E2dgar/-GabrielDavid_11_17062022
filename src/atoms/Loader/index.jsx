import './index.css';

/**
 * Component for showing Loader
 * @component
 */
const Loader = () => {
    return (
        <div className="loader">
            <h1 className="loader-title">Chargement</h1>
            <div className="loader-animation"></div>
        </div>
    );
};

export default Loader;
