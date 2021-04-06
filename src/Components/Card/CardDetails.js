import styled from 'styled-components';

import { Heart, Download } from 'react-feather';

const StyledCardDetails = styled.div`
    color: var(--color-white);
    flex-direction: column;
    flex-grow: 99;
    padding: 0.5rem 1rem;
    display: flex;
    justify-content: flex-end;
`

const Author = styled.div`
`

const Statistics = styled.div`
    font-weight: 300;

    & span {
        display: inline-flex;
        margin-right: 1.5rem;
        margin-top: 0.25rem;
        align-items: center;
        }

    & svg {
        width: 1rem;
        height: 1rem;
        margin-right: 0.5rem;
    }
`

function CardDetails(props) {

    return <StyledCardDetails {...props}>
        <Author>
            {props.author}
        </Author>
        <Statistics>
            <span><Heart /> {props.loves}</span> <span><Download /> {props.downloads}</span>
        </Statistics>
    </StyledCardDetails>
};

export default CardDetails;