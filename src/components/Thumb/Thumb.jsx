import { Link } from 'react-router-dom';

const Thumb = ({ data }) => {
    return <Link to={`/logement/${data.id}`}>{data.title}</Link>;
};

export default Thumb;
