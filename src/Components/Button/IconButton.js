import styled from 'styled-components';

const StyledButton = styled.a`
    display: flex;
    padding: 0;
    height: 2.5rem;
    width: 2.5rem;
    align-items: center;
    justify-content: center;
    border-radius: var(--radius);
    box-shadow: var(--shadow-small);
    cursor: pointer;
    background-color: ${props => props.type === "primary" ? "var(--color-primary)" : "var(--color-medium-grey)"};
    color: ${props => props.type === "primary" ? "var(--color-white)" : "var(--color-black)"};

    &:hover,
    &:focus {
        background-color: ${props => props.type === "primary" ? "var(--color-black)" : "var(--color-primary)"};
        color: ${props => props.type === "primary" ? "var(--color-white)" : "var(--color-white)"};
        outline: 0;
        box-shadow: var(--shadow-medium);
    }
`

function IconButton(props) {
    return <StyledButton {...props} data-href={props.linkTarget} target="_blank">
        {props.children}
    </StyledButton>
};

export default IconButton;