import { Component, PropsWithChildren } from "react";
import { View, Text, Form, Label } from "@tarojs/components";
import "./index.less";
import TestCP from "../../components/TestCP";
import TestCP2 from "../../components/TestCP2";


export default class Index extends Component<PropsWithChildren> {
  componentWillMount() {}

  componentDidMount() {}

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  render() {
    return (
      <View className='index'>
        <Text>Hello world!</Text>
        <Form>
          <Label>测试</Label>
        </Form>
        <TestCP></TestCP>
        <TestCP2></TestCP2>
      </View>
    );
  }
}
