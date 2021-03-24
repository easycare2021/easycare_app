import React from 'react';

import { Container, Label, TextInputMasked } from './styles';

const BaseTextInputMasked = (props) => {
    return (
    <Container>
        <Label>
        {props.label}
        </Label>
        <TextInputMasked {...props}/>
    </Container>
    );
};

export default BaseTextInputMasked;
