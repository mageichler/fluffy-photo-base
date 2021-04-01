import Container from '../Container';
import Hero from '../Hero';
import SearchSection from '../SearchSection';
import image from './erik-jan.jpg'

function Main() {

    return <div>
        <Hero title="Only fluff photos." image={image} />
        <Container>
            <SearchSection />
        </Container>
    </div>
}
;
export default Main;