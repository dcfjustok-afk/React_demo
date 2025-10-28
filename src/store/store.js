import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';

// configureStore 会接收一个 reducer 对象（或单个 reducer）并返回 store
const store = configureStore({ // 创建  store
    // 配置中间件，默认包含 thunk、logger 等
    middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
  reducer: {
    counter: counterReducer,
  },
});
export default store;