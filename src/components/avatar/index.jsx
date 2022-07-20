import './index.css';
import PropTypes from 'prop-types';

/**
 * Component for showing Avatar : Name et Picture on Logement page
 * @component
 */

const Avatar = ({ data }) => {
    const [firstname, lastname] = data.name.split(' ');

    return (
        <figure className="avatar">
            <figcaption>
                <span>{firstname}</span>
                <span>{lastname}</span>
            </figcaption>
            <img src={data.picture} alt={data.name} />
        </figure>
    );
};

Avatar.propTypes = {
    data: PropTypes.object.isRequired
};

export default Avatar;
