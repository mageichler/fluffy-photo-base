import styled from 'styled-components';
import logo from './logo.svg';
import { Link } from 'react-router-dom'

const StyledLink = styled(Link)`
    display: inline-block;
    height: 2rem;
`

const Img = styled.img`
    height: 2rem;
`

function Logo() {

    return <StyledLink to="/">
        <Img src={logo} alt="Only fluff photos logo: like Instagram logo but with cat ears and tail." />
    </StyledLink>
};

export default Logo;