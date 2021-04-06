import styled from 'styled-components';

const StyledContainer = styled.div`
    width: 1200px;
    min-height: 100%;
    margin: 0 auto;
    display: flex;
    flex-direction: ${props => props.direction || `row`};
`

function Container(props) {


    return <StyledContainer direction={props.direction}>
        {props.children}
    </StyledContainer>
};

export default Container;