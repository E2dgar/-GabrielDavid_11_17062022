import Star from '../svg/star';
import PropTypes from 'prop-types';
import './index.css';

/**
 * Component for showing stars rate
 * @component
 */
const Rate = ({ rating }) => {
    const starsChecked = new Array(5);

    for (let i = 0; i < starsChecked.length; i++) {
        starsChecked[i] = (
            <Star key={`rate-star-${i}`} checked={rating > i && 'checked'} />
        );
    }

    return (
        <div className="rate-container">
            {starsChecked.map((component) => component)}
        </div>
    );
};

Rate.propypes = {
    rating: PropTypes.number.isRequired
};

export default Rate;
