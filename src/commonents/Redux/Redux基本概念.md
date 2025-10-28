Redux
    Redux是管理全局状态的标准工具

Redux中存在4个 核心概念
    1、Store 仓库
    2、Action 动作
    3、Reducer  状态变化函数
    4、Dispatch  触发器

1、Store 仓库
    保存整个应用的状态
    全局唯一
    可以通过 store.getState() 方法来获取当前状态 ， 通过 store.dispatch() 方法来触发状态变化
2、Action 动作
    描述"发生了什么？"的对象
    必须有 type 属性 ， 用于指定 状态变化 的 * 类型 *
    可以有其他属性 ， 用于携带状态变化的额外信息
        例如：
        {
            type: 'increment',
            payload: 10
        }
3、Reducer 状态变化函数
    负责根据Action更新Store的状态
    一个纯函数
        function counterReducer(state = 0, action) {
            switch(action.type) {
                case 'increment':
                    return state + 1;
                case 'decrement':
                    return state - 1;
                default:
                    return state;
            }
        }
4、Dispatch 触发器
    负责将Action发送给Store
    可以通过 store.dispatch() 方法来触发 reducer 函数 更新状态

**  重要  **
使用时的流程
    组件触发action -> 触发dispatch -> 触发reducer 更新state-> store通知组件-> 组件重新渲染

