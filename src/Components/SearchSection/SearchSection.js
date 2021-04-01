import styled from 'styled-components';
import SectionTitle from '../SectionTitle'

const StyledSection = styled.section`
    background-color: var(--color-light-grey);
    width: 100%;
    padding: 4rem 0;
    text-align: center;
`

function SearchSection() {
    
    return <StyledSection>
        <SectionTitle>Search for fluffiness</SectionTitle>
    </StyledSection>
};

export default SearchSection;