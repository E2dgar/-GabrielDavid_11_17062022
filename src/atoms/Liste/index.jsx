const List = ({ content }) => {
    return (
        <ul>
            {content?.map((equipment, index) => (
                <li key={`equipment-${index}`}>{equipment}</li>
            ))}
        </ul>
    );
};

export default List;
