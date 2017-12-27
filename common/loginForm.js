import React, { Component } from "react";
import {
  Body,
  Container,
  Header,
  Content,
  Form,
  Item,
  Input,
  Title,
  Left,
  Right,
  Icon,
  Button,
  Text
} from "native-base";
export default class LoginForm extends Component {
  render() {
    return (
      <Container>
        <Header>
          <Left />
          <Body>
            <Title>EmpManager</Title>
          </Body>
          <Right />
        </Header>
        <Content>
          <Form>
            <Item floatingLabel>
              <Icon active name="ios-mail-open-outline" />
              <Input placeholder=" Username" />
            </Item>
            <Item floatingLabel>
              <Icon active name="ios-finger-print" />
              <Input placeholder=" Password" />
            </Item>
            <Body>
              <Text />
              <Text />
              <Button rounded success>
                <Text>Alright. Take me in ! </Text>
              </Button>
            </Body>
          </Form>
        </Content>
      </Container>
    );
  }
}
