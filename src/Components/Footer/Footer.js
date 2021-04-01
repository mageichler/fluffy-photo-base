import styled from 'styled-components';
import Container from "../Container";

const StyledFooter = styled.footer`
    font-weight: 500;
    line-height: 1.15em;
    background-color: var(--color-black);
    color: var(--color-white);
    width: 100%;
    padding: 2rem 0 4rem;

    & > div {
        justify-content: center;
    }
`

function Footer() {

    return <StyledFooter>
        <Container>
            Made with fur and React.js by&nbsp;<a href="http://magiechler.github.io">Magdalena Eichler</a>
        </Container>
    </StyledFooter>
};

export default Footer;