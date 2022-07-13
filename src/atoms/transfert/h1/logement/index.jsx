import PropTypes from 'prop-types';
import './index.css';

const H1Logement = ({ content }) => {
    return <h1 className="h1-logement">{content}</h1>;
};

H1Logement.propTypes = {
    content: PropTypes.string.isRequired
};

export default H1Logement;
