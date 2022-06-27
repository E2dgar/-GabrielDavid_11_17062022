import Thumb from '../Thumb/Thumb';

const Gallery = ({ data }) => {
    return (
        <>
            <div> galleery</div>
            {data.map((elt) => (
                <Thumb key={elt.id} data={elt} />
            ))}
        </>
    );
};

export default Gallery;
