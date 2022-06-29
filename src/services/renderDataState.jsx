import Error from '../components/errorData';
import Loader from '../components/loader';

const renderData = (data) => {
    if (data) {
        return data.error ? <Error /> : data.isLoading ? <Loader /> : true;
    }
};

export default renderData;
