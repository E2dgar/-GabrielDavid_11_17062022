import './index.css';

const AccordionContent = ({ id, className, component }) => {
    return (
        <dd id={id} className={`logement-accordion-content ${className}`}>
            {component}
        </dd>
    );
};

export default AccordionContent;
