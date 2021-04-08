import CardDetails from './CardDetails';
import LoveButton from '../Button/LoveButton';
import styled from 'styled-components';

const Overlay = styled.div`
    position: absolute;
    top: 0;
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    background-image: linear-gradient(rgba(24,31,35,0.2), rgba(24,31,35,0), rgba(24,31,35,0), rgba(24,31,35,0), rgba(24,31,35,0.4), rgba(24,31,35,0.6));
`

const Buttons = styled.div`
    display: flex;
    flex-direction: row-reverse;
    padding: 1rem;
`

function CardOverlay(props) {
    return <Overlay {...props}>
            <Buttons>
                <LoveButton />
            </Buttons>
            <CardDetails {...props}/>
        </Overlay>
};

export default CardOverlay;