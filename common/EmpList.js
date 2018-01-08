import React, { Component } from "react";
import { ListView } from "react-native";
import {
  Card,
  CardItem,
  Content,
  Container,
  Header,
  Left,
  Body,
  Right,
  Button,
  Icon,
  Title,
  List,
  ListItem,
  Text
} from "native-base";
import { Actions } from "react-native-router-flux";
import { fetchEmp } from "../actions/createEmp";
import { connect } from "react-redux";
import _ from "lodash";

class EmpList extends Component {
  navigatetocreateEmp() {
    Actions.createEmp();
  }
  componentDidMount() {
    //listens to hardwareBackPress
    // BackHandler.addEventListener("hardwareBackPress", () => {
    //   console.log("back button pressed.");
    //   if (Actions.currentScene === "empList") return true;
    // });
    this.props.fetchEmp();
  }
  editEmp(item) {
    Actions.updateEmp({ employee: item });
  }

  render() {
    return (
      // <View>
      //   <Text>hi............</Text>
      // </View>
      <Container>
        <Header>
          <Body>
            <Title>Your Employees</Title>
          </Body>
          <Right>
            <Button transparent onPress={() => this.navigatetocreateEmp()}>
              <Icon name="ios-add" />
            </Button>
          </Right>
        </Header>

        <Content>
          <Card>
            <List
              dataArray={this.props.employees}
              renderRow={item => (
                // <ListItem icon>
                <ListItem onPress={() => this.editEmp(item)}>
                  <CardItem>
                    <Body>
                      <Text>
                        {"    "}
                        {item.name}
                      </Text>
                    </Body>
                  </CardItem>
                </ListItem>
              )}
            />
          </Card>
        </Content>
      </Container>
    );
  }
}

const mapStatetoProps = state => {
  const employees = _.map(state.employee.employees, (val, uid) => {
    return { ...val, uid };
  });
  console.log(employees, "mstp");
  return { employees };
};
export default connect(mapStatetoProps, { fetchEmp })(EmpList);
