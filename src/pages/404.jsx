import { Link } from 'react-router-dom';
import MainLayout from '../components/Layouts/Main';
import styled from 'styled-components';
import { colors, fontSize } from '../styles/constants';

const Styled404 = styled.section`
    padding-bottom: 10rem;
    * {
        color: ${colors.primary};
    }

    h1 {
        font-size: ${fontSize.desktop_XXL};
        font-weight: 700;
        margin: 120px 0 66px;

        @media (max-width: 768px) {
            font-size: ${fontSize.mobile_XXL};
            margin-bottom: 10px;
        }
    }

    p {
        font-size: ${fontSize.single_H1};
        margin-bottom: 182px;

        @media (max-width: 768px) {
            font-size: ${fontSize.L};
            margin-bottom: 130px;
        }
    }

    a {
        @media (max-width: 768px) {
            font-size: ${fontSize.M};
        }
    }
`;

const P404 = ({ data }) => {
    return (
        <MainLayout>
            <Styled404>
                <h1>{data.title}</h1>
                <p>{data.content}</p>
                <Link to="">{data.link}</Link>
            </Styled404>
        </MainLayout>
    );
};

export default P404;
