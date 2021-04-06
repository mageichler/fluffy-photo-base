import Card from '../Card/Card';
import Container from '../Container';
import Hero from '../Hero';
import image from './erik-jan.jpg';
import SearchSection from '../SearchSection';

function Main() {

    return <div>
        <Hero title="Only fluff photos." image={image} />
        <Container direction="column">
            <SearchSection />
            <Card image={image}></Card>
            <div style={{ height: '50px' }}></div>
        </Container>
    </div>
}
;
export default Main;