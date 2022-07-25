import PropTypes from 'prop-types';
import './index.css';
import H1Home from '../../atoms/texts/h1/home';

/**
 * Component for showing Hero
 * @component
 */
const Hero = ({ content, className }) => {
    return (
        <section className={`hero ${className || ''}`}>
            <H1Home content={content?.h1} />
        </section>
    );
};

Hero.propTypes = {
    content: PropTypes.object
};

export default Hero;
