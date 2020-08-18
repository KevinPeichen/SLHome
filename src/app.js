import { Component } from 'react'
import './app.scss';
import './assets/fonts/iconfont.css';
import Index from './reducers';
import configStore from './store';

const store = configStore();
class App extends Component {

  componentDidMount () {}

  componentDidShow () {}

  componentDidHide () {}

  componentDidCatchError () {}

  // this.props.children 是将要会渲染的页面
  render () {
    // return (
    //   <Provider store={store}>
    //     <Index />
    //   </Provider>
    // )
    return this.props.children
  }
}

export default App
