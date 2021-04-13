/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

import Api from '../Api';
import Container from '../Components/Container';
import PhotoHeader from '../Components/Photo/PhotoHeader';
import PhotoFooter from '../Components/Photo/PhotoFooter';
import SectionTitle from '../Components/SectionTitle';
import CardsList from '../Components/CardsList';

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
    const query = "/photos/" + id;

    const [photo_data, set_photo_data] = useState();

    useEffect(() => {
        Api(query, data => set_photo_data(data))
    }, [query, id])

    console.log(photo_data)

    const query_related_photos = () => {
        const main_path = photo_data?.tags;
        const landing_page_tags = main_path && main_path
            .map(item => item.title)
            .filter(item => item !== "grey" && item !== "black" && item !== "white")
            .slice(0, 3)
            .join("%20");
        const related_collections = photo_data?.related_collections?.results;
        const related_collections_names = related_collections && related_collections
            .map(item => item.title.split(" ").join("%20"))
            .slice(0, 3)
            .join("%20");
        console.log("Related photos: ", landing_page_tags || "animals%20" + related_collections_names || "pet")
        return landing_page_tags || "animal%20" + related_collections_names;
    }

    return (
        <Container direction="column">
            <PhotoHeader date={photo_data?.updated_at} photoID={id}/>
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
                <CardsList query={query_related_photos()} />
            </div>
        </Container>
    );
}

export default Photo;