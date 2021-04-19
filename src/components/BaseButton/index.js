import React from 'react';
import { Container, Loading, Text } from './styles';

const BaseButton = (props) => {
  return (
      <Container {...props}>
          <Text {...props}>{props.text}</Text>
          {props.loading && <Loading color="white" />}
      </Container>
  );
};

export default BaseButton;
