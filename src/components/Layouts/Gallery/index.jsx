import Thumb from '../../Thumb/Thumb';
import styled from 'styled-components';
import { colors } from '../../../styles/constants';

const StyledGallery = styled.ul`
    display: grid;
    grid-template-columns: repeat(auto-fill, 340px);
    justify-content: center;
    max-width: 1240px;
    margin: 43px auto;
    padding: 56px 60px;
    gap: 60px 50px;
    background: ${colors.main_bkg};
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
