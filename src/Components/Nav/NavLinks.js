import { ChevronDown } from 'react-feather';
import styled from 'styled-components';

import NavLink from './NavLink';

const StyledList = styled.ul`
    padding: 0;
    margin: 0;
    color: var(--color-white);
`

const StyledChevronDown = styled(ChevronDown)`
    margin-bottom: -0.25rem;
    margin-left: 0.5rem;
`

function NavLinks(props) {

    return (
        <StyledList>
            <NavLink target="/" name="Home" />
            {/* <NavLink target="/#" name="Categories">
                <StyledChevronDown />
            </NavLink> */}
            <NavLink target="/about" name="About this project"/>
        </StyledList>
    )
}

export default NavLinks;