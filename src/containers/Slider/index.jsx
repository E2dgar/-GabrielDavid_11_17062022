import { useState } from 'react';
import styled from 'styled-components';
import SlideButton from '../../atoms/SlideButton/SlideButton';
import SlideIndex from '../../atoms/SlideIndex';

const StyledSlider = styled.section`
    width: 100%;
    max-width: 1240px;
    height: 415px;
    overflow: hidden;
    position: relative;

    div {
        width: 300%;
        display: flex;
        padding: 0;
        margin: 0;
    }

    img {
        flex-basis: calc(100% / 3);
        height: 415px;
        object-fit: cover;
        object-position: center center;
    }

    p {
        position: absolute;
    }
`;
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

    const handleClick = {
        prev: handlePrev,
        next: handleNext
    };

    return (
        <StyledSlider>
            <SlideButton direction="prev" handleClick={handleClick} />

            <div className="slides-container">
                <img
                    src={content?.[index - 1]}
                    alt={`Accomodation-${index}`}
                    className={`img-${index}`}
                />
            </div>
            <SlideIndex index={index} length={content?.length} />
            <SlideButton direction="next" handleClick={handleClick} />
        </StyledSlider>
    );
};

export default Slider;
