import styled from 'styled-components';

const StyledAuthor = styled.div`
    display: flex;
    align-items: ${ props => props.type === "thumb" ? "center" : "flex-start" };

    & img {
        border-radius: 50%;
        margin-right: 1rem;
    }

    & div {
        margin: 0;
    }
`

const Bold = styled.span`
    font-weight: 500;
`
function Author(props) {
    return <StyledAuthor {...props}>
        <img src={props.type === "thumb" ? props.author?.profile_image?.small : props.author?.profile_image?.medium} alt={props.author?.name} />
        <div>
            <Bold>{props.author?.name}</Bold>
            {props.children}
        </div>
    </StyledAuthor>
}

export default Author;