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
  CardItem,
  Label,
  Picker,
  H3
} from "native-base";
import { connect } from "react-redux";
import { empUpdate, empCreate, throwError } from "../actions/createEmp";

class CreateEmp extends Component {
  empUpdate({ prop, value }) {
    this.props.empUpdate({ prop, value });
  }
  buttonHandler() {
    const { name, phone, shift } = this.props;
    if (name !== "" && phone !== "")
      this.props.empCreate({ name, phone, shift });
    else {
      this.props.throwError();
    }
  }
  render() {
    return (
      <Container>
        <Header>
          <Left />
          <Body>
            <Title>Create Employee</Title>
          </Body>
          <Right />
        </Header>
        <Content>
          <Card>
            <Form>
              <CardItem>
                <Item fixedLabel>
                  <Label>Name</Label>
                  <Input
                    placeholder=""
                    value={this.props.name}
                    onChangeText={value =>
                      this.empUpdate({ prop: "name", value })
                    }
                  />
                </Item>
              </CardItem>
              <CardItem>
                <Item fixedLabel>
                  <Label>Phone</Label>
                  <Input
                    keyboardType="numeric"
                    value={this.props.phone}
                    onChangeText={value =>
                      this.empUpdate({ prop: "phone", value })
                    }
                  />
                </Item>
              </CardItem>
              <CardItem>
                <Item fixedLabel>
                  <Label>Shift</Label>
                  <Picker
                    iosHeader="Select one"
                    mode="dropdown"
                    selectedValue={this.props.shift}
                    onValueChange={value =>
                      this.empUpdate({ prop: "shift", value })
                    }
                    style={{ flex: 2 }}
                  >
                    <Picker.Item label="Monday" value="Monday" />
                    <Picker.Item label="Tuesday" value="Tuesday" />
                    <Picker.Item label="Wednesday" value="Wednesday" />
                    <Picker.Item label="Thursday" value="Thursday" />
                    <Picker.Item label="Friday" value="Friday" />
                  </Picker>
                </Item>
              </CardItem>
              <Body>
                <Text>
                  {"\n"}
                  {this.props.err}
                  {"\n"}
                </Text>
                <CardItem>
                  <Button rounded success onPress={() => this.buttonHandler()}>
                    <Text>{"     Create Employee    "}</Text>
                  </Button>
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
  const { name, phone, shift, err } = state.empForm;
  return { name, phone, shift, err };
};
export default connect(mapStatetoProps, { empUpdate, empCreate, throwError })(
  CreateEmp
);
