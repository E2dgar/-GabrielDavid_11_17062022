import Error from '../components/errorData';
import Loader from '../components/loader';

/**
 * Return error component , loading component or True
 * @param {Object} data From fetch
 * @returns
 */
const renderData = (data) => {
    if (data) {
        return data.error ? <Error /> : data.isLoading ? <Loader /> : true;
    }
};

export default renderData;
