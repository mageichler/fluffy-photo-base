import styled from 'styled-components';
import Container from '../Container';

const StyledHeader = styled.header`
    width: 100%;
    height: 432px;
    background-image: url(${props => props.image});
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
`

const GradientBox = styled.div`
    width: 100%;
    height: 100%;
    background-image: linear-gradient(rgba(24,31,35,0), rgba(24,31,35,0), rgba(24,31,35,0), rgba(24,31,35,0), rgba(24,31,35,0.4), rgba(24,31,35,0.7));
`

const StyledPageTitle = styled.h1`
    color: var(--color-white);
    font-size: 5rem;
    align-self: flex-end;
    font-weight: 700;
    margin-bottom: 3.5rem;
`

function Hero(props) {

    return <StyledHeader image={props.image}>
        <GradientBox>
            <Container>
                <StyledPageTitle>{props.title}</StyledPageTitle>
            </Container>
        </GradientBox>
    </StyledHeader>
};

export default Hero;