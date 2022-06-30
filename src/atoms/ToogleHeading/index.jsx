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
    border-radius: 5px;
    background-color: ${colors.primary};
    & button {
        appearance: none;
        border: none;
        background-color: unset;
        display: flex;
        justify-content: space-between;
        align-items: center;
        color: ${colors.white};
        font-size: ${fontSize.L};
        width: 100%;
        cursor: pointer;

        svg {
            transition: transform 0.3s ease-in-out;
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
