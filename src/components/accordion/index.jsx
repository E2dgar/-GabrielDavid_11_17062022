import { useState } from 'react';
import { stringToClassName } from '../../services/strings';
import PropTypes from 'prop-types';
import './index.css';
import AccordionHeading from '../../atoms/accordion/accordionHeading';
import AccordionContent from '../../atoms/accordion/accordionContent';

/**
 * Component for Accordion
 * @component
 */
const Accordion = ({ label, component, className }) => {
    const [isOpen, setIsOpen] = useState(false);

    const normalizeLabel = stringToClassName(label);

    const handleToogle = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className={className}>
            <AccordionHeading
                label={label}
                normalizeLabel={normalizeLabel}
                handleToogle={handleToogle}
                isPanelOpen={isOpen}
            />
            <AccordionContent
                id={`${normalizeLabel}-panel`}
                className={`panels ${isOpen ? 'show' : ''}`}
                component={component}
            />
        </div>
    );
};

Accordion.propTypes = {
    label: PropTypes.string.isRequired,
    component: PropTypes.element.isRequired,
    className: PropTypes.string.isRequired
};

export default Accordion;
