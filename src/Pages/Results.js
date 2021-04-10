import { useState } from 'react';
import { useParams } from 'react-router';
import CardsList from '../Components/CardsList';
import Container from '../Components/Container';
import SearchBar from '../Components/SeachBar/SearchBar';
import Sort from "../Components/Sort/Sort";

function Results() {
    const { userQuery } = useParams();

    const [order_by, set_order_by] = useState();
    const query = '/search/photos?collections=animals&content_filter=high&query=' + userQuery;

    return (
        <>
            <Container direction="column">
                <SearchBar />
                <Sort order={set_order_by} />
                <CardsList query={query + "&order_by=" + order_by} />
            </Container>

        </>
    )
}

export default Results;