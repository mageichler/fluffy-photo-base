import { useState, useEffect } from 'react';
import styled from 'styled-components';
import Masonry from 'react-masonry-css';

import Api from '../../Api';
import Card from '../Card/Card';

const ScrollMe = styled.div`
    height: 700px;
    padding-bottom: 8rem;
    overflow: auto;
`

const Collection = styled(Masonry)`
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    margin-left: -1rem;
    width: auto;

    & > .my-masonry-grid_column {
    padding-left: 1rem;
    background-clip: padding-box;
    }

    /* Style your items */
    & > .my-masonry-grid_column > a {
    margin-bottom: 1rem;
    }
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
            <Collection
                breakpointCols={3}
                className="my-masonry-grid"
                columnClassName="my-masonry-grid_column"
            >
                {card_collection}
            </Collection>
        </ScrollMe>
    )
};

export default CardsList;