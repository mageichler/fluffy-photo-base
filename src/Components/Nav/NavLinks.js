import styled from 'styled-components';
import NavLink from './NavLink';

const StyledList = styled.ul`
    padding: 0;
    margin: 0;
    color: var(--color-white);
`

function NavLinks() {

    return <StyledList>
        <NavLink target="/" name="Home" />
        <NavLink target="/category" name="Categories of fluffiness"/>
        <NavLink target="/about" name="About this project"/>
    </StyledList>
}

export default NavLinks;