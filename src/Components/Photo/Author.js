import styled from 'styled-components';

const StyledAuthor = styled.div`
    display: flex;
    align-items: ${ props => props.type === "thumb" ? "center" : "flex-start" };

    & img {
        border-radius: 50%;
        margin-right: 1rem;
    }

    & p {
        margin: 0;
    }
`

const Bold = styled.span`
    font-weight: 500;
`
function Author(props) {
    console.log(props.type)
    return <StyledAuthor {...props}>
        <img src={props.type === "thumb" ? props.author?.profile_image?.small : props.author?.profile_image?.medium} alt={props.author?.name} />
        <p>
            <Bold>{props.author?.name}</Bold>
            {props.children}
        </p>
        
    </StyledAuthor>
}

export default Author;