import { Download } from 'react-feather';

import IconButton from './IconButton';
import Api from "../../Api";

function DownloadButton(props) {
    const query = "/photos/" + props.photoID + "/download?force=true";
    const download_me = () => Api(query, data => window.open(data.url))

    return <IconButton type="primary" onClick={download_me}>
        <Download />
    </IconButton>
};

export default DownloadButton;