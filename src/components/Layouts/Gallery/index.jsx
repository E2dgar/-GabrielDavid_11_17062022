import Thumb from '../../Thumb/Thumb';
import styled from 'styled-components';
import { colors } from '../../../styles/constants';

const StyledGallery = styled.ul`
    display: grid;
    grid-template-columns: repeat(auto-fill, 340px);
    justify-content: center;
    max-width: 1240px;
    margin: 43px auto;
    padding: 56px 0;
    border-radius: 10px;
    gap: 60px 50px;
    background: ${colors.main_bkg};

    @media (max-width: 768px) {
        background: none;
        margin-top: 22px;
        padding: 0;
        gap: 20px;
        grid-template-columns: 1fr;
    }
`;
const Gallery = ({ data }) => {
    return (
        <StyledGallery>
            {data.map((elt) => (
                <Thumb key={elt.id} data={elt} />
            ))}
        </StyledGallery>
    );
};

export default Gallery;
