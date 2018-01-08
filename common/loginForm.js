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
  Text,
  Spinner,
  Card,
  CardItem
} from "native-base";
import { emailChanged, passwordChanged, loginUser } from "../actions";
import { connect } from "react-redux";
class LoginForm extends Component {
  emailChanged(text) {
    this.props.emailChanged(text);
  }
  passwordChanged(text) {
    this.props.passwordChanged(text);
  }
  loginUser() {
    this.props.loginUser({
      email: this.props.email,
      password: this.props.password
    });
  }
  loading() {
    //console.log(this.props.loading);
    if (this.props.loading) {
      console.log("loading is true");
      return <Spinner />;
    } else {
      console.log("loading is false");
      return (
        <Button onPress={() => this.loginUser()} rounded success>
          <Text>{"      Alright. Take me in !    "}</Text>
        </Button>
      );
    }
  }
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
          <Card>
            <Form>
              <CardItem>
                <Item floatingLabel>
                  <Icon active name="ios-mail-open-outline" />
                  <Input
                    label="email"
                    placeholder=" Email"
                    onChangeText={text => this.emailChanged(text)}
                    value={this.props.email}
                  />
                </Item>
              </CardItem>
              <CardItem>
                <Item floatingLabel>
                  <Icon active name="ios-finger-print" />
                  <Input
                    secureTextEntry
                    label="password"
                    placeholder=" Password"
                    onChangeText={text => this.passwordChanged(text)}
                    value={this.props.password}
                  />
                </Item>
              </CardItem>
              <Body>
                <Text>
                  {"\n"}
                  {this.props.error}
                  {"\n"}
                </Text>
                <CardItem>
                  {this.props.loading == true ? (
                    <Spinner />
                  ) : (
                    <Button onPress={() => this.loginUser()} rounded success>
                      <Text>{"      Alright. Take me in !    "}</Text>
                    </Button>
                  )}
                </CardItem>
                <Text>
                  {"\n"}
                  {"\n"}
                </Text>
              </Body>
            </Form>
          </Card>
        </Content>
      </Container>
    );
  }
}

const mapStatetoProps = state => {
  return {
    email: state.auth.email,
    password: state.auth.password,
    user: state.auth.user,
    error: state.auth.error,
    loading: state.auth.loading
  };
};
export default connect(mapStatetoProps, {
  emailChanged,
  passwordChanged,
  loginUser
})(LoginForm);
