import { useParams } from 'react-router';
import { useEffect, useState } from 'react';
import Api from '../Api';
import CardsList from '../Components/CardsList';
import Container from '../Components/Container';
import Hero from '../Components/Hero';
import Sort from '../Components/Sort/Sort';

function Category(props) {
    const { name, query } = useParams()
    const [cover_photo, set_cover_photo] = useState();
    const [order_by, set_order_by] = useState();
    const query_cp = '/photos/random?query=' + query + '&orientation=landscape&content_filter=high';

    useEffect(() => {
        Api(query_cp, data => set_cover_photo(data?.urls?.regular));
    }, []);

    return (
        <>
            <Hero title={name} image={cover_photo}/>
            <Container direction="column">
                <Sort order={ set_order_by }/>
                <CardsList query={query + "&order_by=" + order_by}/>
            </Container>

        </>
    )
};

export default Category;