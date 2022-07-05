import RateSvg from '../svg/RateSvg';

const Rate = ({ rating }) => {
    const starsChecked = new Array(5);

    if (!rating) {
        return <p>Load</p>;
    }
    for (let i = 1; i < 6; i++) {
        if (i <= rating) {
            starsChecked[i] = true;
        }
    }

    return (
        <div>
            {starsChecked.map((star, index) => (
                <RateSvg key={`rate-star-${index}`} checked={star} />
            ))}
        </div>
    );
};

export default Rate;
