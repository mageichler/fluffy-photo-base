import { useState, useEffect } from 'react';
import styled from 'styled-components';

import Api from '../../Api';
import Card from '../Card/Card';

const Collection = styled.div`
    columns: 4 auto;
    column-gap: 1rem;
    padding-bottom: 4rem;
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
    />
    )
}

function CardsList(props) {
    const [card_collection, set_card_collection] = useState();
    const [page, set_page] = useState("1");
    const query = '/search/photos?collections=animals&query=' + props.query + "&per_page=20";

    const handleFetch = page => Api(query, data => {
        return set_card_collection(createCardsList(data?.results))
    });

    useEffect(() => {
        handleFetch(page);
    }, [props.query]);

    return (
            <Collection>
            {card_collection}
            </Collection>
    )
};

export default CardsList;