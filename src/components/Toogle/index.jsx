import { useState } from 'react';
import Paragraph from '../../atoms/Texts/Paragraph';
import ToogleHeading from '../../atoms/ToogleHeading';
import { stringToClassName } from '../../services/strings';
import styled from 'styled-components';
import { colors } from '../../styles/constants';

const StyledDD = styled.dd`
    max-height: 0;
    transition: max-height 0.35s ease-in-out;

    overflow: hidden;
    background-color: ${colors.toogle_bkg};
    margin: 0;

    &.show {
        max-height: 50vh;
    }
`;

const Toogle = ({ label, component }) => {
    const [isOpen, setIsOpen] = useState(false);

    const normalizeLabel = stringToClassName(label);

    const handleToogle = () => {
        setIsOpen(!isOpen);
    };

    return (
        <dl>
            <ToogleHeading
                label={label}
                normalizeLabel={normalizeLabel}
                handleToogle={handleToogle}
                isPanelOpen={isOpen}
            />
            <StyledDD
                id={`${normalizeLabel}-panel`}
                className={`panels ${isOpen ? 'show' : ''}`}>
                {component}
            </StyledDD>
        </dl>
    );
};

export default Toogle;
