import { UNSPLASH_BASE_URL, UNSPLASH_HEADERS } from './consts';

function Api(path, success) {
    return fetch(`${UNSPLASH_BASE_URL}${path}`, {
        headers: UNSPLASH_HEADERS
    }).then(res => res.json()).then(success)
}

export default Api;
