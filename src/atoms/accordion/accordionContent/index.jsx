import PropTypes from 'prop-types';
import './index.css';

/**
 * Component for showing Accordion Content
 * @component
 */
const AccordionContent = ({ id, className, component }) => {
    return (
        <dd id={id} className={`logement-accordion-content ${className}`}>
            {component}
        </dd>
    );
};

AccordionContent.propTypes = {
    id: PropTypes.string.isRequired,
    className: PropTypes.string.isRequired,
    component: PropTypes.element.isRequired
};

export default AccordionContent;
