import styled from 'styled-components';
import { colors } from '../../styles/constants';

const StyledAvatar = styled.figure`
    figcaption {
        color: ${colors.primary};
    }

    img {
        border-radius: 50%;
        max-width: 64px;
    }
`;

const Avatar = ({ data }) => {
    return (
        <StyledAvatar className="avatar">
            <img src={data?.picture} alt={data?.name} />
            <figcaption>{data?.name}</figcaption>
        </StyledAvatar>
    );
};

export default Avatar;
