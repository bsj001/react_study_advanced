// 创建外壳组件
import React, { Component } from "react";
import Header from "./components/Header";
import List from "./components/List";
import Footer from "./components/Footer";
import './App.css'

// 创建并暴露APP组件
export default class App extends Component {

  // 初始化
  state = {
    todos: [
      { id: '001', name: '吃饭', done: true },
      { id: '002', name: '睡觉', done: true },
      { id: '003', name: '色色', done: false },
      { id: '004', name: '游戏', done: false },
    ]
  }

  // 用于接收一个todo，参数是todo对象
  addTodo = (todoObj) => {
    // 获取原来的 todos
    let { todos } = this.state
    const newTodos = [todoObj, ...todos]
    this.setState({ todos: newTodos })
  }

  // 勾选与取消勾选todos
  updateTodo = (id, done) => {
    const { todos } = this.state
    let newTodos = todos.map((todo) => {
      if (todo.id === id) return { ...todo, done }
      else return todo
    })
    this.setState({ todos: newTodos })
  }

  // 删除 todo 数据
  deleteTodo = (id) => {
    const { todos } = this.state
    let newTodos = todos.filter(todo => {
      return todo.id !== id
    })
    this.setState({ todos: newTodos })
  }

  // 全选
  checkAllTodo = (done) => {
    const { todos } = this.state
    let newTodos = todos.map((todo) => {
      return { ...todo, done }
    })
    this.setState({ todos: newTodos })
  }

  // 清除所有已勾选的
  clearALLDone = () => {
    const { todos } = this.state
    let newTodos = todos.filter(todo => {
      return !todo.done
    })
    this.setState({ todos: newTodos })
  }


  render() {
    let { todos } = this.state
    return (
      <div className="todo-container">
        <div className="todo-wrap">
          <Header addTodo={this.addTodo} />
          <List todos={todos} updateTodo={this.updateTodo} deleteTodo={this.deleteTodo} />
          <Footer todos={todos} checkAllTodo={this.checkAllTodo} clearALLDone={this.clearALLDone} />
        </div>
      </div>
    )
  }
}
