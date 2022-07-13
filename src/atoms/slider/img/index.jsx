import './index.css';

const SliderImg = ({ content, index }) => {
    return (
        <img
            src={content?.[index - 1]}
            alt={`Accomodation-${index}`}
            className="slider-img"
        />
    );
};

export default SliderImg;
