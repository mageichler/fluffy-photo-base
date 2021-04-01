import styled from 'styled-components';
import Logo from './Logo.js';
import NavLinks from './NavLinks';
import Container from '../Container';

const StyledNav = styled.nav`
    background-color: var(--color-black);
    position: fixed;
    top: 0;
    width: 100%;
    padding: 1rem 0;
`

const StyledLogo = styled.div`
    margin-right: 1.5rem;
    height: 2rem;
`

const StyledNavList = styled.div`
    align-self: flex-end;
    &:last-of-type {
        flex-grow: 99;
        display: flex;
        justify-content: flex-end;
    }
`

function Nav() {

    return <StyledNav>
        <Container>
            <StyledLogo>
                <Logo />
            </StyledLogo>
            <StyledNavList>
                <NavLinks />
            </StyledNavList>
        </Container>
    </StyledNav>
};

export default Nav;