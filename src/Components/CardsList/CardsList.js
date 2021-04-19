import { useState, useEffect } from 'react';
import styled from 'styled-components';

import Api from '../../Api';
import Card from '../Card/Card';

const ScrollMe = styled.div`
    height: 700px;
    padding-bottom: 8rem;
    overflow: auto;
    margin-right: -1rem;
`

const Collection = styled.div`
    display: grid;
    gap: 1rem;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    grid-auto-rows: minmax(180px, auto);
    grid-auto-flow: dense;
`

const createCardsList = data => {
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
    const [page, set_page] = useState(1);
    const query = '/search/photos?collections=animals&query=' + props.query + "&per_page=10&page=" + page;
    console.log(page, query);
    
    const handleFetch = () => Api(query, data => set_card_collection([...card_collection || "", ...createCardsList(data?.results)]));
    
    const infinite_scroll = e => {
        if (e.target.scrollHeight - e.target.scrollTop === e.target.clientHeight) {
            set_page(Number(page) + 1);
            handleFetch();
        }
    }
    
    useEffect(() => {
        set_card_collection('')
        handleFetch(page);
        set_page(Number(page) + 1);
    }, [props.query]);
    
    return (
        <ScrollMe onScroll={infinite_scroll}>
            <Collection>
                {card_collection}
            </Collection>
        </ScrollMe>
    )
};

export default CardsList;