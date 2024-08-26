// 创建外壳组件
import React, { Component } from "react";
import './App.css'
import Count from './components/Count/index'

// 创建并暴露APP组件
export default class App extends Component {
  render () {
    return (
      <div>
        <Count />
      </div>
    )
  }
}
