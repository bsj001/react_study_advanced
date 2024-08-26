/*
  1,该文件是一个用于创建一个为Count组件服务的reducer,reducedr的本质就是一个函数
  2,preState--之前的数据，action--动作对象
*/
import { createSlice } from '@reduxjs/toolkit'
import { INCREMENT, DECREMENT } from '../constant'


const initState = 0;
export const countSlice = createSlice({
  name: 'count',//命名空间，用来自动生成action中的type,name值会成为前缀，保证唯一,不重名
  initState,
  reducers: {//指定state的各种操作，直接在对象中添加方法
    //可以通过不同的方法来指定对state的不同操作
    //两个参数：state代理对象，可以直接修改：action操作的信息
    caculate (preState, action) {
      const { type, data } = action
      switch (type)
      {
        case INCREMENT:
          return preState + data
        case DECREMENT:
          return preState - data
        default:
          return preState
      }
    }
  }
})


export const createIncrementAction = data => ({ type: INCREMENT, data })
export const createDecrementAction = data => ({ type: DECREMENT, data })

export default countSlice.reducers