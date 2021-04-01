import styled from 'styled-components';

const StyledTitle = styled.h2`

`

function SectionTitle(props) {

    return <StyledTitle>
        {props.children}
    </StyledTitle>
};

export default SectionTitle;