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
    console.log('slider', content.length);

    const [position, setPosition] = useState({
        prev: content?.length - 1,
        current: 0,
        next: 1
    });

    const handlePrev = () => {};

    const handleNext = () => {};

    return (
        <StyledSlider>
            <div className="slides-container">
                <img
                    src={content[position.prev]}
                    alt={`Accomodation-${position}`}
                />

                <img
                    src={content[position.current]}
                    alt={`Accomodation-${position + 1}`}
                />

                <img
                    src={content[position.next]}
                    alt={`Accomodation-${position + 2}`}
                />

                <SlideIndex handlePrev={handlePrev} handleNext={handleNext} />
            </div>
        </StyledSlider>
    );
};

export default Slider;
