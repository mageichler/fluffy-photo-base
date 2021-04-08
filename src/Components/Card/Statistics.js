import styled from 'styled-components';


import { Heart, Download } from 'react-feather';

const StatisticsDiv = styled.div`
    & span {
        display: inline-flex;
        margin-top: 0.25rem;
        align-items: center;
        }

    & span:first-of-type {
        margin-right: 1.5rem;
    }

    & svg {
        width: 1.2rem;
        height: 1.2rem;
        padding-bottom: 0.1rem;
        margin-right: 0.5rem;
    }
`

function Statistics(props) {

    return <StatisticsDiv>
        <span><Heart /> {props.loves}</span> <span><Download /> {props.downloads}</span>
    </StatisticsDiv>
}

export default Statistics;