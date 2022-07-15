import PropTypes from 'prop-types';
import './index.css';
import Arrow from '../../svg/arrow';

/**
 * Component for showing Accordion heading : button + arow
 * @component
 */
const AccordionHeading = ({
    label,
    normalizeLabel,
    handleToogle,
    isPanelOpen
}) => {
    return (
        <dt className="heading-panel-wrapper">
            <button
                id={`${normalizeLabel}-accordion`}
                onClick={handleToogle}
                aria-expanded={isPanelOpen}
                aria-controls={`${normalizeLabel}-panel`}
                className={`${normalizeLabel}-accordion`}>
                {label}

                <Arrow />
            </button>
        </dt>
    );
};

AccordionHeading.propTypes = {
    label: PropTypes.string.isRequired,
    normalizeLabel: PropTypes.string.isRequired,
    handleToogle: PropTypes.func.isRequired,
    isPanelOpen: PropTypes.bool.isRequired
};

export default AccordionHeading;
