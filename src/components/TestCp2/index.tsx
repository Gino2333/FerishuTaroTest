import { Component, PropsWithChildren } from 'react'
import { View, Form, Label } from '@tarojs/components'
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
        <Form>
          <Label>测试z组件</Label>
        </Form>
      </View>
    )
  }
}
