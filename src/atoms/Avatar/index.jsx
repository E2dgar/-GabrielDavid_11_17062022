import './index.css';
import PropTypes from 'prop-types';

/**
 * Component for showing Name et Picture on Logement page
 *
 * @component
 */

const Avatar = ({ data }) => {
    const [firstname, lastname] = data.name.split(' ');
    console.log(firstname);
    return (
        <figure className="avatar">
            <figcaption>
                <span>{firstname}</span>
                <span>{lastname}</span>
            </figcaption>
            <img src={data?.picture} alt={data?.name} />
        </figure>
    );
};

Avatar.propTypes = {
    /**
     * Avatar data
     */
    data: PropTypes.object.isRequired
};

export default Avatar;
