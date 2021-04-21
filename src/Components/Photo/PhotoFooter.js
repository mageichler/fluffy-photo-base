import styled from 'styled-components';

import Author from '../Author';
import AuthorMoreInfo from '../Author/AuthorMoreInfo';
import Statistics from '../Card/Statistics';
import InfoButton from '../Button/InfoButton';
import ShareButton from '../Button/ShareButton';
import IconButtonsGroup from '../Button/IconButtonsGroup';

const FooterInfo = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    margin-bottom: 2rem;
`
const RightColumn = styled.div`
    margin-top: -0.35rem;
`

function PhotoFooter(props) {

    return <FooterInfo>
        <Author author={props.author}>
            <AuthorMoreInfo author={props.author}/>
        </Author>
        <RightColumn>
            <Statistics
                loves={props.loves}
                downloads={props.downloads}
            />
            <IconButtonsGroup>
{/*                 <InfoButton />
                <ShareButton /> */}
            </IconButtonsGroup>
        </RightColumn>
    </FooterInfo>
}

export default PhotoFooter;