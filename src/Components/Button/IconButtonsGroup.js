import styled from 'styled-components';

const ButtonsGroup = styled.div`
    display: flex;
    justify-content: ${props => props.justifyContent !== undefined ? props.justifyContent : "flex-end"};
    margin-top: 0.5rem;
    
    & button {
        margin-left: ${props => props.justifyContent === "flex-start" ? "0" : "0.5rem"};
        margin-right: ${props => props.justifyContent === "flex-start" ? "0.5rem" : "0"};
    }
`

function IconButtonsGroup(props) {
    return <ButtonsGroup {...props}>
        {props.children}
    </ButtonsGroup>
}

export default IconButtonsGroup;