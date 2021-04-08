import IconButton from './IconButton';
import { Download } from 'react-feather';


function DownloadButton(props) {
    
    return <IconButton type="primary" href={props.download}>
        <Download />
    </IconButton>
};

export default DownloadButton;