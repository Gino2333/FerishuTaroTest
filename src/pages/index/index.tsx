import { Component, PropsWithChildren } from 'react'
import { View, Text, Form, Label } from '@tarojs/components'
import './index.less'

export default class Index extends Component<PropsWithChildren> {

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    return (
      <View className='index'>
        <Text>Hello world!</Text>
        <Form>
          <Label>测试</Label>
        </Form>
      </View>
    )
  }
}
