import { useState, useEffect } from 'react';
import styled from 'styled-components';
import Masonry from 'react-masonry-css';

import Api from '../../Api';
import Card from '../Card/Card';

const ScrollMe = styled.div`
    padding-bottom: 8rem;
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

    const handleFetch = () => Api(query, data => {
        set_card_collection([...card_collection || "", ...createCardsList(data?.results)]);
        set_page(Number(page) + 1);
        return card_collection;
    });

    const infinite_scroll = e => {
        const target_element = e?.target?.scrollingElement;
        if (target_element?.scrollHeight - target_element?.scrollTop === target_element?.clientHeight) {
            handleFetch();
        }
    }

    useEffect(() => {
        handleFetch();
        set_page(Number(page) + 1);
    }, [props.query]);

    useEffect(() => {
        window.addEventListener("scroll", infinite_scroll);
        console.log(query)
        return () => window.removeEventListener("scroll", infinite_scroll);
    }, [query]);

    return (
        <ScrollMe>
            <Collection
                breakpointCols={4}
                className="my-masonry-grid"
                columnClassName="my-masonry-grid_column"
            >
                {card_collection}
            </Collection>
        </ScrollMe>
    )
};

export default CardsList;