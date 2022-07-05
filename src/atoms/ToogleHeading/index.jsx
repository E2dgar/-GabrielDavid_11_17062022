import { useState } from 'react';
import { stringToClassName } from '../../services/strings';
import styled from 'styled-components';
import { colors, fontSize } from '../../styles/constants';
import arrow from '../../assets/arrow.png';
import Arrow from '../svg/arrow';

const StyledDt = styled.dt`
    width: 100%;
    max-width: 1222px;
    padding: 0.8rem 1.6rem;
    margin: 30px 0 0;
    border-radius: 5px;
    background-color: ${colors.primary};
    position: relative;
    z-index: 1;

    & button {
        appearance: none;
        border: none;
        background-color: unset;
        display: flex;
        justify-content: space-between;
        align-items: center;
        color: ${colors.white};
        font-size: ${fontSize.XL};
        width: 100%;
        cursor: pointer;

        @media (max-width: 768px) {
            font-size: ${fontSize.S};
        }

        svg {
            transition: transform 0.3s ease-in-out;
            width: 29px;

            @media (max-width: 768px) {
                width: 18px;
            }
        }

        &[aria-expanded='true'] svg {
            transform: rotate(-180deg);
        }
    }
`;

const ToogleHeading = ({
    label,
    normalizeLabel,
    handleToogle,
    isPanelOpen
}) => {
    console.log('lab', label);
    return (
        <StyledDt className="heading-panel-wrapper">
            <button
                id={`${normalizeLabel}-accordion`}
                onClick={handleToogle}
                aria-expanded={isPanelOpen}
                aria-controls={`${normalizeLabel}-panel`}
                className={`${normalizeLabel}-accordion`}>
                {label}

                <Arrow />
            </button>
        </StyledDt>
    );
};

export default ToogleHeading;
