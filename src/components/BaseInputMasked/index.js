import React from 'react';

import { Container, Label, Input } from './styles';

const BaseInputMasked = (props) => {
    return (
        <Container>
            <Label>
                {props.label}
            </Label>
            <Input {...props} />
        </Container>
    );
};

export default BaseInputMasked;
