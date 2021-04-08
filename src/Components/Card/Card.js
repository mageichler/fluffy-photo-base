import styled from 'styled-components';
import { useState } from 'react';
import CardOverlay from './CardOverlay';
import { Link } from 'react-router-dom';

const StyledCard = styled.article`
    margin: 1rem;
    position: relative;
    border-radius: var(--radius-medium);
    overflow: hidden;
    box-shadow: var(--shadow-small);
    transition-property: all;
    transition-duration: 0.1s;
    transition-timing-function: ease;

    &:hover,
    &:focus {
        box-shadow: var(--shadow-medium);
    }

    & > div {
        visibility: hidden;
        opacity: 0;
        transition-property: all;
        transition-duration: 0.1s;
        transition-timing-function: ease-in;
    }

    &:hover > div,
    &:focus > div {
        visibility: visible;
        opacity: 1;
    }
`

const Image = styled.img`
    width: 100%;
`

function Card(props) {
    const [cardHeight, setCardHeight] = useState();

    const handleImageLoad = (e) => {
        const imageHeight = e.target.clientHeight;
        setCardHeight(imageHeight);
    }

    return (
        <Link to={"/photo/" + props.id}>
            <StyledCard style={{ height: cardHeight }} {...props}>
                <Image src={props.image} alt={props.alt_text} onLoad={ handleImageLoad }/>
                    <CardOverlay {...props} />
            </StyledCard>
        </Link>
    )
};

export default Card;