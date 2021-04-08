import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledCategoriesList = styled.ul`
    padding: 0;

    & li {
        list-style-type: none;
        margin-bottom: 2rem;
        font-size: 1.5rem;
    }
    
    & ul {
        padding: 0;
        margin-top: 1rem;
    }

    & ul > li {
        list-style-type: none;
        display: inline-block;
        font-size: 1rem;
        ${props => { return { ...props.listItemStyle } }}
    }
    
    & a {
        display: block;
        color: var(--color-black);
        ${props => {return { ...props.linkStyle }}}
    }

    & a:hover,
    & a:focus {
        ${props => { return { ...props.linkHoverStyle } }}
    }

`

const categories = [
    {
        mainCategory: "Animals",
        list:
            [
                "Cats",
                "Kitties",
                "Dogs",
                "Puppies",
                "Hamsters",
                "Bunnies",
                "Chicks",
                "Tigers",
                "Wolves",
                "Cavias",
                "Rats"
            ]
    },
    {
        mainCategory: "General",
        list:
            [
                "Pets",
                "Mamals",
                "Wild animals",
                "Fluffy babies",
                "Rodents",
                "Birds"
            ]
    }
];

const cats_elements = categories.map((item, index) => {
    return <li key={`main-` + index}>{item.mainCategory}
        <ul>{item.list.map((element, index) => <li key={`sub-` + index}><Link>{element}</Link></li>)}
        </ul>
    </li>
})

function CategoriesList(props) {
    console.log(props)

    return <StyledCategoriesList {...props}>{cats_elements}</StyledCategoriesList>;
};

export default CategoriesList;