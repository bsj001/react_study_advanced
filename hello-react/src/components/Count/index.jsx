import React, { Component } from 'react'
import store from '../../redux/store'
import { createIncrementAction, createDecrementAction } from '../../redux/count_reducer'

export default class index extends Component {

  state = {}

  /* 
  //在index.js中实现，一劳永逸
  componentDidMount () {
    //检测redux中状态的变化，只要变化，就调用render
    store.subscribe(() => {
      this.setState({})
    })
  } */



  increament = () => {
    const { value } = this.selectNumber
    // const { count } = this.state
    // this.setState({ count: value * 1 + count })
    store.dispatch(createIncrementAction(value * 1))
  }

  decrement = () => {
    const { value } = this.selectNumber
    store.dispatch({ type: 'increment', data: value * 1 })
  }

  oddIncrement = () => {
    const { value } = this.selectNumber
    const { count } = this.state
    if (count % 2 === 1)
    {
      this.setState({ count: count + value * 1 })
    }
  }

  asyncIncrement = () => {
    const { value } = this.selectNumber
    const { count } = this.state
    setTimeout(() => {
      this.setState({ count: count + value * 1 })
    }, 500);
  }



  render () {
    return (
      <div>
        <h1>当前求各为:{store.getState()}</h1>
        <select ref={c => this.selectNumber = c}>
          <option value='1'>1</option>
          <option value='2'>2</option>
          <option value='3'>3</option>
          <option value='4'>4</option>
        </select>&nbsp;&nbsp;
        <button onClick={() => this.increament()}>+</button>&nbsp;&nbsp;
        <button onClick={() => this.decrement()}>-</button>&nbsp;&nbsp;
        <button onClick={() => this.oddIncrement()}>当前求和为奇数再加</button>&nbsp;&nbsp;
        <button onClick={() => this.asyncIncrement()}>异步加</button>&nbsp;&nbsp;
      </div>
    )
  }
}
