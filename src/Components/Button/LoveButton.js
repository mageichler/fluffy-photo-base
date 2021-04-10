import IconButton from './IconButton';
import { Heart } from 'react-feather';
import Api from '../../Api';
import { useState } from 'react';

function LoveButton(props) {

    return <IconButton>
        <Heart />
    </IconButton>
};

export default LoveButton;