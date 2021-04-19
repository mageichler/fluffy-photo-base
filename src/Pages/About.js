import Hero from '../Components/Hero';
import Container from '../Components/Container';
import image from '../Img/chinchilla.jpg';

function About() {

    return (
        <>
            <Hero title="About this project" image={image} />
            <Container>
                <p>
                    This project is still in the work-in-progress phase. So if I may have a timid request to you, <br />
                    please be patient if something doesn't work perfectly. <br />
                    Thank you a thousand!
                </p>
            </Container>
        </>
    )
}

export default About;