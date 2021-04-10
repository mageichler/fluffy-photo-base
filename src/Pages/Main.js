import { Link } from 'react-router-dom'
import image from '../Img/erik-jan.jpg';
import Container from '../Components/Container';
import Hero from '../Components/Hero';
import SearchSection from '../Components/SearchSection';
import SectionTitle from '../Components/SectionTitle';
import SubSectionTitle from '../Components/SubSectionTitle';
import CardsList from '../Components/CardsList/CardsList';

function Main() {

    return (
        <>
            <Hero title="Only fluff photos." image={image} />
            <Container direction="column">
                <SearchSection />
                <SectionTitle>Popular categories:</SectionTitle>

                <SubSectionTitle>Cats <Link to="/category/Cats&cat">see more</Link></SubSectionTitle>
                <CardsList query="cat&per_page=20"/>

                <SubSectionTitle>Hamsters <Link to="/category/Hamsters&hamster">see more</Link></SubSectionTitle>
                <CardsList query="hamster&per_page=20"/>

                <SubSectionTitle>Fluffy babies <Link to="/category/Fluffy%20babies&baby%20animal">see more</Link></SubSectionTitle>
                <CardsList query="baby%20animal&per_page=20"/>
            </Container>
        </>
    )
}
;
export default Main;