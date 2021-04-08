import styled from 'styled-components';

const StyledTitle = styled.h2`
    font-size: 2.5rem;
    margin-bottom: 4rem;
`

function SectionTitle(props) {

    return <StyledTitle>
        {props.children}
    </StyledTitle>
};

export default SectionTitle;