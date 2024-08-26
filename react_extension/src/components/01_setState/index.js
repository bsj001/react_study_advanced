import React, { Component } from 'react'

export default class Demo extends Component {
  state = { count: 0 }

  add = () => {
    //1.
    const { count } = this.state
    // this.setState({ count: count + 1 })
    // this.setState({ count: count + 1 }, () => console.log(this.state.count))
    //2.
    // this.setState((state) => {
    //   return { count: state.count + 1 }
    // })
    //3.
    this.setState(state => ({ count: state.count + 1 }))
  }


  render () {
    return (
      <div>
        <h2>当前求和为：{this.state.count}</h2>
        <button onClick={this.add}>点我加一</button>
      </div>
    )
  }
}
