import styled from 'styled-components';

import { Heart } from 'react-feather';


const StyledButton = styled.button`
    display: flex;
    padding: 0;
    height: 2.5rem;
    width: 2.5rem;
    align-items: center;
    justify-content: center;
`

function LoveButton() {

    return <StyledButton>
        <Heart />
    </StyledButton>
};

export default LoveButton;