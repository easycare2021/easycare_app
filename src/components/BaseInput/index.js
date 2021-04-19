import React, { forwardRef, useEffect } from 'react';

import { Container, Input, Label, IconContainer, Icon } from './styles';

const BaseInput = forwardRef((props, ref) => {

  useEffect(() => {
    if (ref) {
      ref.current.setNativeProps({
        style: {
          fontFamily: 'Raleway-Regular',
        },
        text: props.text,
      });
    }
  }, [ref, props]);

  return (
    <Container>
      <Label>{props.label}</Label>
      <Input {...props} ref={ref} />
      { props.icon &&
        <IconContainer onPress={props.handlePress}>
          <Icon source={props.icon} />
        </IconContainer>
      }
    </Container>
  );
});

export default BaseInput;
