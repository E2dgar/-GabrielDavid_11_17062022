import { useState } from 'react';
import SlideButton from '../../atoms/slideButton';
import SlideIndex from '../../atoms/slideIndex';
import SliderImg from '../../atoms/slider/img';
import './index.css';

const Slider = ({ content }) => {
    const [index, setIndex] = useState(1);

    const handleNext = () => {
        if (index === content?.length) {
            setIndex(1);
        } else {
            setIndex(index + 1);
        }
    };

    const handlePrev = () => {
        if (index === 1) {
            setIndex(content?.length);
        } else {
            setIndex(index - 1);
        }
    };

    return (
        <section className="slider">
            <SlideButton direction="prev" handleClick={handlePrev} />

            <div className="slides-container">
                <SliderImg content={content} index={index} />
            </div>

            <SlideIndex index={index} length={content?.length} />

            <SlideButton direction="next" handleClick={handleNext} />
        </section>
    );
};

export default Slider;
