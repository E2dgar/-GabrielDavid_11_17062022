import { useState } from 'react';
import styled from 'styled-components';
import SlideIndex from '../../atoms/SlideIndex';

const StyledSlider = styled.section`
    width: 100%;
    max-width: 1240px;
    height: 415px;
    overflow: hidden;

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
    const [index, setIndex] = useState(0);

    const handlePrev = () => {};

    const handleNext = () => {};

    return (
        <StyledSlider>
            <div className="slides-container">
                <img src={content?.[index]} alt={`Accomodation-${index}`} />

                <SlideIndex handlePrev={handlePrev} handleNext={handleNext} />
            </div>
        </StyledSlider>
    );
};

export default Slider;
