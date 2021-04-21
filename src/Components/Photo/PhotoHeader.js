import styled from 'styled-components';
import PublishedDate from '../PublishedDate';
import DownloadButton from '../Button/DownloadButton';
import IconButtonsGroup from '../Button/IconButtonsGroup';

const HeaderInfo = styled.div`
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    margin-top: 2rem;
`

function PhotoHeader(props) {

    return <HeaderInfo>
        <PublishedDate date={props.date}/>
        <IconButtonsGroup>
            <DownloadButton photoID={props.photoID}/>
        </IconButtonsGroup>
    </HeaderInfo>
}

export default PhotoHeader;