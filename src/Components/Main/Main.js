import Container from '../Container';
import Hero from '../Hero';
import image from './erik-jan.jpg';
import SearchSection from '../SearchSection';
import SectionTitle from '../SectionTitle';
import CardsList from '../CardsList/CardsList';

function Main() {

    return <div>
        <Hero title="Only fluff photos." image={image} />
        <Container direction="column">
            <SearchSection />
            <SectionTitle>Popular categories:</SectionTitle>
            <CardsList />
            <div style={{ height: '50px' }}></div>
        </Container>
    </div>
}
;
export default Main;