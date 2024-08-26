// 使用 RTK 来构建 store
import { configureStore } from '@reduxjs/toolkit'
import countSlice from './count_reducer'

// 创建 store 用来创建store对象，需要一个配置对象作为参数
const store = configureStore({
  // 用来配置 store 中用到的 reducer
  reducer: {
    countReducer: countSlice
  }
})

export default store
