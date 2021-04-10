import styled from 'styled-components';

const StyledHeader3 = styled.h3`
    display: block;
    font-size: 2.5rem;
    font-weight: 700;
    margin-top: 3rem;

    & a {
        font-size: 1.25rem;
        font-weight: 300;
    }
`

function SubSectionTitle(props) {
    
    return <StyledHeader3>
        {props.children}
    </StyledHeader3>
}

export default SubSectionTitle;