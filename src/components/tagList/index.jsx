import Tag from '../../atoms/tag';
import './index.css';

const TagsList = ({ logement }) => {
    return (
        <ul className="tags-list">
            {logement?.tags?.map((tag, index) => (
                <Tag key={index}>{tag}</Tag>
            ))}
        </ul>
    );
};

export default TagsList;
