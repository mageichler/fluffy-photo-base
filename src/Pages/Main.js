import image from '../Img/erik-jan.jpg';
import Container from '../Components/Container';
import Hero from '../Components/Hero';
import SearchSection from '../Components/SearchSection';
import SectionTitle from '../Components/SectionTitle';
import CardsList from '../Components/CardsList/CardsList';

function Main() {

    return (
        <>
            <Hero title="Only fluff photos." image={image} />
            <Container direction="column">
                <SearchSection />
                <SectionTitle>Recent fluffs</SectionTitle>
                <CardsList query="fluffy%20animal&order_by=latest"/>
            </Container>
        </>
    )
}
;
export default Main;