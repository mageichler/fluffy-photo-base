import { createApi } from 'unsplash-js';
import nodeFetch from 'node-fetch';
import Card from '../Card/Card';
import { useState, useEffect } from 'react';
import styled from 'styled-components';

const Collection = styled.div`
    display: flex;
    flex-wrap: wrap;

`

function createCardsList(data) {
    return data.map(item => <Card
        id={item?.id}
        key={item?.id}
        image={item?.urls?.small}
        alt_text={item?.alt_description}
        loves={item?.likes}
        downloads={item?.downloads}
        author={item?.user}
    />)
}

function CardsList(props) {
    const [card_collection, set_card_collection] = useState();
    
    useEffect(() => {
        const unsplash = createApi({
            accessKey: '7AbJfZ0EILzxarytpKR1iSx-Yn2CLyJUK2Vqd1Cw_oQ',
            fetch: nodeFetch,
        });
        
        unsplash.search.getPhotos({
            query: 'cat',
            orderBy: "relevant"
        })
            .then(search_results => set_card_collection(createCardsList(search_results?.response?.results)))
            
    }, []);
    
    return <Collection>{card_collection}</Collection>
};

export default CardsList;