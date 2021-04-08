import styled from 'styled-components';
import Published from './Published';
import LoveButton from '../Button/LoveButton';
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
        <Published date={props.date}/>
        <IconButtonsGroup>
            <LoveButton />
            <DownloadButton download={props.download}/>
        </IconButtonsGroup>
    </HeaderInfo>
}

export default PhotoHeader;