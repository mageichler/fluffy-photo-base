import styled from 'styled-components';
import { Link } from 'react-router-dom';


const ListItem = styled.li`
    display: inline-block;
    list-style-type: none;
    padding-left: 2.6em;
`

const StyledLink = styled(Link)`
    color: var(--color-white);
    font-weight: 500;
    line-height: 1rem;
`

function NavLink(props) {

    return <ListItem>
        <StyledLink to={props.target}>
            {props.name}
        </StyledLink>
    </ListItem>
};

export default NavLink;