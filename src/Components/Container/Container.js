import styled from 'styled-components';

const StyledContainer = styled.div`
    width: 1200px;
    min-height: 100%;
    margin: 0 auto;
    display: flex;
    flex-direction: ${props => props.direction || `row`};

    @media(max-width: 1264px) {
        width: calc(100% - 4rem);
        margin-left: 2rem;
        margin-right: 2rem;
    }
`

function Container(props) {


    return <StyledContainer direction={props.direction}>
        {props.children}
    </StyledContainer>
};

export default Container;