import PropTypes from 'prop-types';
import './index.css';

/**
 * Component for showing a slider button
 * @component
 */
const SlideButton = ({ direction, handleClick }) => {
    return (
        <button className={`slide-button ${direction}`} onClick={handleClick}>
            <svg viewBox="0 0 48 80" xmlns="http://www.w3.org/2000/svg">
                <path d="M0.960022 72.3458L8.04002 79.4258L47.64 39.8258L8.04002 0.22583L0.960022 7.30583L33.48 39.8258L0.960022 72.3458Z" />
            </svg>
        </button>
    );
};

SlideButton.propTypes = {
    direction: PropTypes.string.isRequired,
    length: PropTypes.func.isRequired
};

export default SlideButton;
