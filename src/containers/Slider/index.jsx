import { useState } from 'react';
import styled from 'styled-components';

const StyledSlider = styled.section`
    width: 100%;
    max-width: 1240px;
    height: 415px;
    overflow: hidden;

    div {
        width: 300%;
        display: flex;
    }

    img {
        width: 100%;
        height: 415px;
        object-fit: cover;
        object-position: center center;
    }
`;
const Slider = ({ content }) => {
    const [position, setPosition] = useState(0);

    return (
        <StyledSlider>
            <div className="slides-container">
                <img
                    src={content[position - 1]}
                    alt={`Accomodation-${position}`}
                />
                <img
                    src={content[position]}
                    alt={`Accomodation-${position + 1}`}
                />
                <img
                    src={content[position + 1]}
                    alt={`Accomodation-${position + 2}`}
                />
            </div>
        </StyledSlider>
    );
};

export default Slider;
