import styled from 'styled-components';
import Author from '../Author/Author';

const StyledCardDetails = styled.div`
    color: var(--color-white);
    flex-direction: column;
    flex-grow: 99;
    padding: 1rem;
    display: flex;
    justify-content: flex-end;
`

function CardDetails(props) {
    return <StyledCardDetails {...props}>
        <Author author={props.author} type="thumb"/>
    </StyledCardDetails>
};

export default CardDetails;