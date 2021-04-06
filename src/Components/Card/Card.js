import styled from 'styled-components';
import { useState } from 'react';
import CardOverlay from './CardOverlay';

const StyledCard = styled.article`
    position: relative;
    width: 350px;
    border-radius: var(--radius-medium);
    overflow: hidden;
    box-shadow: var(--shadow-small);
    transition-property: all;
    transition-duration: 0.1s;
    transition-timing-function: ease;

    &:hover,
    &:focus {
        box-shadow: var(--shadow-medium);
        margin-top: -0.5rem;
        margin-bottom: 0.5rem;
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
        console.log(e.target, e.target.clientHeight, imageHeight);
    }

    return <StyledCard style={{ height: cardHeight }}>
        <Image src={props.image} alt="Sweet kitty" onLoad={handleImageLoad}/>
        <CardOverlay author="Anton Lemsky" loves="23" downloads="11"/>
    </StyledCard>
};

export default Card;