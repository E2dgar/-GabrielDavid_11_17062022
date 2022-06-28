import styled from 'styled-components';

const StyledMain = styled.main`
    width: 100%;
    max-width: 1256px;
    margin: 0 auto;
    text-align: center;
    padding: 0 8px;
`;

const MainLayout = ({ children }) => {
    return <StyledMain>{children}</StyledMain>;
};

export default MainLayout;
