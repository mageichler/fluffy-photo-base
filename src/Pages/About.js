import styled from 'styled-components';

import Hero from '../Components/Hero';
import Container from '../Components/Container';
import SubSectionTitle from '../Components/SubSectionTitle';
import image from '../Img/patrik-inzinger-zTmTp1Z-WAI-unsplash.jpg';
import kazik from '../Img/kazik.png';
import henry from '../Img/henry.png';
import rysiu from '../Img/rysiu.png';

const Paragraph = styled.p`
    font-size: 1.25rem;
    line-height: 2rem;
    max-width: 800px;

    &:first-of-type {
        font-weight: 500;
    }

    &:last-of-type {
        margin-bottom: 8rem;
    }
`

const Image = styled.img`
    border-radius: var(--radius);
    box-shadow: var(--shadow-small);
    margin-left: 1rem;
    max-width: calc((100% - 2rem) / 3);

    &:first-of-type {
        margin-left: 0
    }
`
const PhotoDiv = styled.div`
    display: flex;
    margin-bottom: 2rem;
`

function About() {

    return (
        <>
            <Hero title="About this project" image={image} />
            <Container direction="column">
                <Paragraph>
                    Welcome to my very first React.js app! This is also my final project from programming classes. I'm still working on improving some features so at this moment I kindly ask you to be patient and forgiving if something doesn't work perfectly. Thank you a thousand!
                </Paragraph>
                <Paragraph>
                    I wanted to create a safe photo browser for those who need a little bit of fluffiness during the day. As we based originally on Unsplash photo base, except 'programming things' my biggest problem was to create proper, safe and fluffy queries to the API. But due to weird tagging, it is possible to find here not-so-safe photos or pictures showing something absolutely not fluffy. Unfortunately, I'm not a query wizard, so please forgive me if you find this kind of things.
                </Paragraph>
                <SubSectionTitle>
                    About me
                </SubSectionTitle>
                <Paragraph>
                    I'm Magdalena Eichler and I'm an aspiring frontend developer with UX/UI design background. Currently, I'm still learning a lot but I'm also on my way to looking for my first serious programming experience.
                </Paragraph>
                <Paragraph>
                    If you have any question, found a bug or just want to say hello, please contact me here: <br />
                    <a href="mailto:mageichler@gmail.com">mageichler@gmail.com</a>
                </Paragraph>
                <Paragraph>
                    And, as we are in Fluffy Photo Base, here are my own fluffs, Henry the Fluff, Richard Lively and Kazimierz the Great:
                </Paragraph>
                <PhotoDiv>
                    <Image alt="Chinchilla, the alpha male - Henry the Fluff." src={henry} />
                    <Image alt="Chinchilla, the weird one - Richard Lively." src={rysiu} />
                    <Image alt="Chinchilla, the smallest one - Kazimierz the Great." src={kazik} />
                </PhotoDiv>
                <Paragraph>
                    Have a fluffy day!
                </Paragraph>
            </Container>
        </>
    )
}

export default About;