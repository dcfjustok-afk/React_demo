Redux Toolkit
    官方推荐的 Redux 工具集，简化 Redux 代码，提供默认配置和最佳实践。

核心API：
    configureStore()：替你默认配置 Redux DevTools、常见中间件（包括 thunk）。
    createSlice()：把 reducer + action creators 合并，省去手写 action type。
    createAsyncThunk()：处理典型异步 flow（基于 thunk）。
    createEntityAdapter()：方便进行实体规范化（normalization）。
    RTK Query：内置数据获取与缓存工具（类似于 Apollo Query）.

configureStore()
    配置 Redux Store，自动添加中间件、DevTools 等。
    Store 时Redux中保存全局State的唯一地方。configureStore() 是RTK提供的创建store的方法，内部帮你自动配置 常用的中间件（如 thunk、logger）。
    推荐使用 configureStore() 而不是 createStore()，因为它更简单、更安全。  
    
    ****它会自动添加 Redux DevTools 扩展、thunk 中间件等。 避免手动配置这些常见的中间件。

createSlice()
    RTK核心的功能之一
    createSlice()  把reducer、actions和初始state放在一个地方。
        1.它会自动生成 action creators 函数 、 action type 常量 和 reducer。
        2.内置 immer 库，允许你以mutable 方式编写 reducer 逻辑。
举例：
    action 结构：{ type: 'counter/incrementByAmount', payload: 5 }，你通常只调用 incrementByAmount(5)。

    在React里把store注入 （Provider） 与消费 （useSelector, useDispatch）       这两个是 React-Redux 提供的 Hook，用来操作 Redux。
        把store 提供给 React组件树 需要Procider  组件内部使用 useSelector 读取state  ，用 useDispatch 触发action。
            Provider 把store 放到react的上下文，所有子组件都能访问到store。
            useSelector 会订阅 store ， state变时 组件 自动重新渲染。

createAsyncThunk()
    createAsyncThunk 是  RTK 提供的一个工具函数，用于处理异步操作。
    它会自动生成pending、fulfilled、rejected 三种 action type ， 搭配extraReducers 来处理loading/success/error 三种状态。
    createAsyncThunk 内部基于 thunk （函数式异步），但封装更友好

为什么需要
    常见场景 发请求获取数据，需要处理loading / success / error 三种状态。
    createAsyncThunk 可以自动处理这些状态，避免手动编写重复代码。 它可以让这些状态管理清晰、少错
    