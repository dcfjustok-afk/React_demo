// features/counter/counterSlice.js
import { createSlice } from '@reduxjs/toolkit';

// 初始 state：可以是任何结构（对象、数组等）
const initialState = {
  value: 0,
  status: 'idle' // 用于记录异步状态（可选）
};

const counterSlice = createSlice({
  name: 'counter', // slice 名称，会用于生成 action.type 前缀，例如 'counter/increment'
  initialState,
  reducers: {
    // 下面每个方法都被认为是 "case reducer"：接收 state 和 action
    increment(state) {
      // 注意：这里可以直接修改 state（看起来像可变），因为 RTK 内部用 immer 自动生成新的不可变 state
      state.value += 1;
    },
    decrement(state) {
      state.value -= 1;
    },
    incrementByAmount(state, action) {
      // action.payload 会包含传入的值
      state.value += action.payload;
    }
  }
});

// increment, decrement, incrementByAmount 都是“case reducers”，RTK 会为它们生成对应的 action creator（函数）。

// action 结构：{ type: 'counter/incrementByAmount', payload: 5 }，你通常只调用 incrementByAmount(5)。


// 导出自动生成的 action creators
export const { increment, decrement, incrementByAmount } = counterSlice.actions;

// 导出 reducer，用于 configureStore
export default counterSlice.reducer;
