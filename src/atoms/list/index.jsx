import PropTypes from 'prop-types';
import './index.css';

/**
 * Component for showing a list
 * @component
 */

const List = ({ content }) => {
    return (
        <ul className="accordion-list">
            {content?.map((equipment, index) => (
                <li key={`equipment-${index}`}>{equipment}</li>
            ))}
        </ul>
    );
};

List.propTypes = {
    content: PropTypes.array.isRequired
};

export default List;
