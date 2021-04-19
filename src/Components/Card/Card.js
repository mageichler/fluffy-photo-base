import styled from 'styled-components';
import CardOverlay from './CardOverlay';
import { Link } from 'react-router-dom';

const StyledLink = styled(Link)`
    display: block;
    max-width: 100%;
`

const StyledCard = styled.article`
    line-height: 1rem;
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
    margin-bottom: -3px;
`

function Card(props) {
    /* const [card_height, set_card_height] = useState();
    const [image_height, set_image_height] = useState();

    const handle_image_load = e => {
        set_image_height(e?.target?.clientHeight);
        set_card_height(image_height);
    };
    
     */
    return (
        <StyledLink to={"../photo/" + props.id} className="card">
            <StyledCard  {...props}>
                <Image src={props.image} alt={props.alt_text} />
                    <CardOverlay {...props} />
            </StyledCard>
        </StyledLink>
    )
};

export default Card;