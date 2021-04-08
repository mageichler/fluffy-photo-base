import { createApi } from 'unsplash-js';
import nodeFetch from 'node-fetch';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import Container from '../Container';
import PhotoHeader from './PhotoHeader';
import PhotoFooter from './PhotoFooter';
import SectionTitle from '../SectionTitle';

const ImageWrap = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    margin: 1rem 0 2rem;
    background-color: var(--color-light-grey);
    box-shadow: var(--shadow-small)
`

const Image = styled.img`
    max-width: 100%;
    max-height: 80vh;
`

function Photo() {
    const { id } = useParams();

    const [photo_data, set_photo_data] = useState();

    useEffect(() => {
        const unsplash = createApi({
            accessKey: '7AbJfZ0EILzxarytpKR1iSx-Yn2CLyJUK2Vqd1Cw_oQ',
            fetch: nodeFetch,
        });

        unsplash.photos.get({ photoId: id })
            .then(photo_data => {
                set_photo_data(photo_data.response);
            })
            .catch(response => console.log("nope." + response))
    }, [])

    return (
        <Container direction="column">
            <div>Main fluff / Category: / Photo</div>
            <PhotoHeader date={photo_data?.updated_at} download={photo_data?.links?.self} />
            <ImageWrap>
                <Image
                    src={photo_data?.urls?.regular}
                    alt={photo_data?.alt_description}
                />
            </ImageWrap>
            <PhotoFooter
                author={photo_data?.user}
                loves={photo_data?.likes}
                downloads={photo_data?.downloads}
            />
            <div>
                <SectionTitle>Related photos:</SectionTitle>
            </div>
        </Container>
    );
}

export default Photo;