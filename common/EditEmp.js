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
import _ from "lodash";
import { connect } from "react-redux";
import {
  empUpdate,
  empCreate,
  throwError,
  updateEmp,
  deleteEmp
} from "../actions/createEmp";

class UpdateEmp extends Component {
  empUpdate({ prop, value }) {
    this.props.empUpdate({ prop, value });
  }
  buttonHandler() {
    const { name, phone, shift } = this.props;
    if (name !== "" && phone !== "")
      this.props.updateEmp({
        name,
        phone,
        shift,
        uid: this.props.employee.uid
      });
    else {
      this.props.throwError();
    }
  }
  deleteHandler() {
    this.props.deleteEmp({ uid: this.props.employee.uid });
  }
  componentWillMount() {
    _.each(this.props.employee, (value, prop) => {
      this.props.empUpdate({ prop, value });
    });
  }
  render() {
    return (
      <Container>
        <Header>
          <Left />
          <Body>
            <Title>Update Employee</Title>
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
                    <Text>{"     Update Employee    "}</Text>
                  </Button>
                </CardItem>
                <CardItem>
                  <Button rounded danger onPress={() => this.deleteHandler()}>
                    <Text>{"     Delete Employee    "}</Text>
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
export default connect(mapStatetoProps, {
  empUpdate,
  updateEmp,
  throwError,
  deleteEmp
})(UpdateEmp);
