import PropTypes from 'prop-types';
import './index.css';

/**
 *
 * Component for showing index/length for slider
 */
const SlideIndex = ({ index, length }) => {
    return (
        <p className="slide-index">
            {index}/{length}
        </p>
    );
};

SlideIndex.propTypes = {
    index: PropTypes.number.isRequired,
    length: PropTypes.number.isRequired
};

export default SlideIndex;
