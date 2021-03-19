import React from 'react';
import { Container, Label, TextInput } from './styles';

const BaseTextInput = ( props ) => {
  return (
    <Container>
      <Label>
        {props.label}
      </Label>
      <TextInput {...props}/>
    </Container>
  );
};

export default BaseTextInput;
