import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { v4 as uuidv4 } from "uuid"
import './index.css'

export default class Header extends Component {


    // 对接收到props的数据进行类型和必要性的限制
    static propTypes = {
        addTodo: PropTypes.func.isRequired
    }


    // 键盘抬起事件
    handleKeyUp = (event) => {
        // 解构赋值获取keyCode和target
        let { keyCode, target } = event
        // 判断是否点击的回车键
        if (keyCode !== 13) return
        // 输入为空判断
        if (target.value.trim() === '') {
            alert("输入内容不能为空！")
            return
        }
        // 准备todo对象
        const todoObj = {
            id: uuidv4(),
            name: target.value,
            done: false
        }
        this.props.addTodo(todoObj)
        target.value = ''
    }

    render() {
        return (
            <div className="todo-header">
                <input onKeyUp={this.handleKeyUp} type="text" placeholder="请输入你的任务名称，按回车键确认"></input>
            </div>
        )
    }
}
