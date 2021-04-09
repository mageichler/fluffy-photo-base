import { useState, useEffect } from 'react';
import styled from 'styled-components';

import Api from '../../Api';
import Card from '../Card/Card';

const Collection = styled.div`
    display: flex;
    flex-wrap: wrap;

`
const query = '/search/photos?query=cat';

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

function CardsList() {
    const [card_collection, set_card_collection] = useState();

    useEffect(() => {
        Api(query, data => set_card_collection(createCardsList(data.results)))
    }, []);

    console.log(card_collection);

    return <Collection>{card_collection}</Collection>
};

export default CardsList;