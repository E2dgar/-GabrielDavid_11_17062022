import PropTypes from 'prop-types';
import './index.css';
import { Link } from 'react-router-dom';

/**
 * Component for showing thumb in gallery
 * @component
 */
const Thumb = ({ data }) => {
    return (
        <li className="gallery-element">
            <img src={data.cover} alt={data.title} />

            <h2>
                <Link to={`/logement/${data.id}`}>{data.title}</Link>
            </h2>
        </li>
    );
};

Thumb.propTypes = {
    data: PropTypes.object.isRequired
};

export default Thumb;
