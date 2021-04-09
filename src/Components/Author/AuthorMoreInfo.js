import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUnsplash } from '@fortawesome/free-brands-svg-icons';
import IconButton from '../Button/IconButton';
import { Globe, Instagram, Twitter } from 'react-feather';
import IconButtonsGroup from '../Button/IconButtonsGroup';

const Wrapper = styled.span`
    display: block;
    font-size: 0.875rem;
    padding-top: 0.5rem;
`
const Bio = styled.p`
    padding-bottom: 1rem;
`
const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`
    font-size: 1.2rem;
`

function portfolio(data) {
    if (data !== null) {
        return <IconButton linkTarget={data}><Globe /></IconButton>
    }
}

function instagram(data) {
    if (data !== null) {
        return <IconButton linkTarget={"https://www.instagram.com/" + data}><Instagram /></IconButton>
    }
}

function twitter(data) {
    if (data !== null) {
        return <IconButton linkTarget={"https://twitter.com/" + data}><Twitter /></IconButton>
    }
}

function AuthorMoreInfo(props) {
    return (
        <Wrapper {...props}>
            <Bio>{props.author?.bio !== null ? props.author?.bio : ""}</Bio>
            <IconButtonsGroup justifyContent="flex-start">
                <IconButton linkTarget={props.author?.links.self}><StyledFontAwesomeIcon icon={faUnsplash} /></IconButton>
                {portfolio(props.author?.portfolio_url)}
                {instagram(props.author?.instagram_username)}
                {twitter(props.author?.twitter_username)}
            </IconButtonsGroup>
        </Wrapper>
    );
}

export default AuthorMoreInfo;