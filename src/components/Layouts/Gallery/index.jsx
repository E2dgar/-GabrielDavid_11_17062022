import PropTypes from 'prop-types';
import './index.css';
import Thumb from '../../thumb';

/**
 * Component for showing Home Gallery
 * @component
 */
const Gallery = ({ data }) => {
    return (
        <ul className="gallery">
            {data?.map((elt) => (
                <Thumb key={elt.id} data={elt} />
            ))}
        </ul>
    );
};

Gallery.propTypes = {
    data: PropTypes.object.isRequired
};

export default Gallery;
