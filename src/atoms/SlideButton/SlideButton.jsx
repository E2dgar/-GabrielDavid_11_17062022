import styled from 'styled-components';

const StyledButton = styled.button`
    position: absolute;
    left: ${(props) => (props.direction === 'prev' ? 0 : 'unset')};
    right: ${(props) => (props.direction === 'next' ? 0 : 'unset')};
    top: 50%;
    transform: ${(props) =>
        props.direction === 'prev' ? 'rotate(180deg)' : 'unset'};
    cursor: pointer;
    background: none;
    border: none;
`;

const SlideButton = ({ direction, handleClick }) => {
    return (
        <StyledButton
            direction={direction}
            onClick={
                direction === 'prev' ? handleClick.prev : handleClick.next
            }>
            <svg
                width="48"
                height="80"
                viewBox="0 0 48 80"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M0.960022 72.3458L8.04002 79.4258L47.64 39.8258L8.04002 0.22583L0.960022 7.30583L33.48 39.8258L0.960022 72.3458Z"
                    fill="white"
                />
            </svg>
        </StyledButton>
    );
};

export default SlideButton;
