import { useEffect, useState } from 'react';

import Api from '../Api';
import CardsList from '../Components/CardsList';
import Container from '../Components/Container';
import Hero from '../Components/Hero';
import Sort from "../Components/Sort/Sort";

function Endless() {
    const [cover_photo, set_cover_photo] = useState();
    const [order_by, set_order_by] = useState();
    const query = '/topics/animals&content_filter=high';
    const query_cp = '/photos/random?query=fluffy&orientation=landscape&content_filter=high';

    useEffect(() => {
        Api(query_cp, data => set_cover_photo(data?.urls?.regular));
    }, []);

    return (
        <>
            <Hero title="Endless flufiness" image={cover_photo} />
            <Container direction="column">
                <Sort order={set_order_by} />
                <CardsList query={query + "&order_by=" + order_by} />
            </Container>

        </>
    )
}

export default Endless;