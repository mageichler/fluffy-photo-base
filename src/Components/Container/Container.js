import styled from 'styled-components';

const StyledContainer = styled.div`
    width: 1200px;
    height: 100%;
    margin: 0 auto;
    display: flex;
`

function Container(props) {


    return <StyledContainer>
        {props.children}
    </StyledContainer>
};

export default Container;