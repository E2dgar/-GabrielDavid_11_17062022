import PropTypes from 'prop-types';
import './index.css';

/**
 * Component for showing slider img
 * @component
 */
const SliderImg = ({ content, index }) => {
    return (
        <img
            src={content?.[index - 1]}
            alt={`Accomodation-${index}`}
            className="slider-img"
        />
    );
};

SliderImg.propTypes = {
    content: PropTypes.array.isRequired,
    index: PropTypes.number.isRequired
};

export default SliderImg;
