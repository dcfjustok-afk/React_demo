Redux 拓展
    1、Redux 中间件
        中间件插在dispatch和reducer之间，用于处理异步操作、日志记录、状态持久化等 （用于扩展dispatch的功能）
        常见用途：
            异步操作（如网络请求）  Thunk 、 Saga 、Observable/RxJS
            日志记录 记录 action、state
            状态持久化（如本地存储）
            错误上报
            权限/鉴权检查