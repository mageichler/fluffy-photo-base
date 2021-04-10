import CategoriesList from '../CategoriesList';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import SectionTitle from '../SectionTitle'
import SearchBar from '../SeachBar/SearchBar';

const StyledSection = styled.section`
    background-color: var(--color-light-grey);
    width: 100%;
    padding: 4rem 6rem;
    text-align: center;
    margin-bottom: 2rem;
`

function SearchSection() {
    return <StyledSection>
        <SectionTitle>Search for fluffiness</SectionTitle>
        <SearchBar />
        <CategoriesList
            listItemStyle={{
                margin: "0.5rem"
            }}

            linkStyle={{
                "background-color": "var(--color-medium-grey)",
                padding: "0.5rem 1.5rem",
                "border-radius": "var(--radius)",
                "box-shadow": "var(--shadow-small)"
            }}

            linkHoverStyle={{
                color: "var(--color-white)",
                "background-color": "var(--color-primary)",
                "text-decoration": "none"
            }}
            />
        <Link to="endless-fluffiness">Today I need endless fluffiness</Link>
    </StyledSection>
};

export default SearchSection;