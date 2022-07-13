import { useState } from 'react';
import ToogleHeading from '../../atoms/ToogleHeading';
import { stringToClassName } from '../../services/strings';
import './index.css';
import AccordionContent from '../../atoms/accordion/accordionContent';

const Toogle = ({ label, component, className }) => {
    const [isOpen, setIsOpen] = useState(false);

    const normalizeLabel = stringToClassName(label);

    const handleToogle = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className={className}>
            <ToogleHeading
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

export default Toogle;
