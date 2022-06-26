import { Link } from "react-router-dom";

const Thumb = ({ data }) => {
console.log('thumb data', data)
  return (
    <Link to={`/logement/${data.id}`}>
      {data.title}
    </Link>
  );
}

export default Thumb;