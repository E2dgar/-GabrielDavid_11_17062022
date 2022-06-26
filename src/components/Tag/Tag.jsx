import PropTypes from 'prop-types';

const Tag = ({ tag }) => {
    return <div className="tag">{tag}</div>;
};

Tag.propTypes = {
    tag: PropTypes.string.isRequired
};

Tag.defaultProps = {
    tag: 'Tag par défault'
};

export default Tag;
