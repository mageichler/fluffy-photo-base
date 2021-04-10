import styled from 'styled-components';

const Form = styled.form`
    display: flex;
    justify-content: flex-end;
    padding: 2rem 0;
`

const Label = styled.label`
    font-weight: 500;
    margin-right: 1rem;
`

const StyledDropdown = styled.select`
    border: 0;
    border-bottom: 2px solid var(--color-black);
    display: inline-block;
    width: 25%;
    font-size: 1rem;
    font-family: inherit;
`
function Sort(props) {

    const sort_items = () => e => {
        props.order(e.target.value)
    }

    return (
        <Form>
            <Label>Sort:</Label>
            <StyledDropdown onChange={sort_items()}>
                <option value="relevant">relevant</option>
                <option value="latest" >latest</option>
            </StyledDropdown>
        </Form>
    );
}

export default Sort;