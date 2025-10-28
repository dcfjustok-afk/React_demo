// App.js (或 Counter.js)
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, incrementByAmount } from './counterSlice';

function Counter() {
  // useSelector 读取状态，参数是一个 selector 函数：state => state.counter.value
  // 这里 订阅了counter.value ，当counter.value 变化时，组件会自动重新渲染。
  const value = useSelector(state => state.counter.value);

  // useDispatch 返回 store.dispatch，方便分发 action
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Count: {value}</h1>
      <button onClick={() => dispatch(increment())}>+1</button>
      <button onClick={() => dispatch(decrement())}>-1</button>
      <button onClick={() => dispatch(incrementByAmount(5))}>+5</button>
    </div>
  );
}

export default Counter;
