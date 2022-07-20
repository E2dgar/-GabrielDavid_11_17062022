import { useState } from 'react';
import PropTypes from 'prop-types';
import './index.css';
import SlideButton from '../../atoms/slider/slideButton';
import SlideIndex from '../../atoms/slider/slideIndex';
import SliderImg from '../../atoms/slider/img';

/**
 * Component for showing Slider
 * @component
 */
const Slider = ({ content }) => {
    const [index, setIndex] = useState(1);
    const numberOfSlide = content.length;

    const handleNext = () => {
        if (index === numberOfSlide) {
            setIndex(1);
        } else {
            setIndex(index + 1);
        }
    };

    const handlePrev = () => {
        if (index === 1) {
            setIndex(numberOfSlide);
        } else {
            setIndex(index - 1);
        }
    };

    return (
        <section className="slider">
            {numberOfSlide > 1 && (
                <SlideButton direction="prev" handleClick={handlePrev} />
            )}

            <div className="slides-container">
                <SliderImg content={content} index={index} />
            </div>

            {numberOfSlide > 1 && (
                <>
                    <SlideIndex index={index} length={content.length} />

                    <SlideButton direction="next" handleClick={handleNext} />
                </>
            )}
        </section>
    );
};

Slider.propTypes = {
    content: PropTypes.array.isRequired
};

export default Slider;
