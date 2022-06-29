import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { colors } from '../../styles/constants';
import ThumbTitle from './ThumbTitle';

const StyledThumb = styled.li`
    position: relative;
    height: 340px;
    border-radius: 10px;
    overflow: hidden;
    display: grid;
    grid-template: 1fr 20px / 1fr;

    @media (max-width: 768px) {
        height: 255px;
    }

    & img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: center center;

        grid-area: 1 / 1 / 3 / 2;
    }

    & a {
        text-decoration: none;
        margin-top: auto;

        &::after {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            bottom: 0;
            right: 0;
        }
    }

    &::after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: ${colors.card_overlay};
        z-index: 1;
    }
`;

const Thumb = ({ data }) => {
    return (
        <StyledThumb>
            <img src={data.cover} alt={data.title} />

            <ThumbTitle>
                <Link to={`/logement/${data.id}`}>{data.title}</Link>
            </ThumbTitle>
        </StyledThumb>
    );
};

export default Thumb;
