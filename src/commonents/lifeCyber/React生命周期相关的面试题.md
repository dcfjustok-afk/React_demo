🚀 一、基础理解类（考察生命周期流程）
✅ 1. React 生命周期有哪些阶段？

React 组件生命周期主要分为三个阶段：

    挂载（Mounting）

    更新（Updating）

    卸载（Unmounting）

✅ 2. 类组件每个阶段分别有哪些函数？
阶段	函数（常用）	简要说明
挂载	constructor → getDerivedStateFromProps → render → componentDidMount	初始化 & 请求数据
更新	getDerivedStateFromProps → shouldComponentUpdate → render → getSnapshotBeforeUpdate → componentDidUpdate	控制是否更新 & 更新后处理
卸载	componentWillUnmount	清理操作

⚙️ 二、Hooks 对应类组件生命周期（函数组件版）
✅ 3. 函数组件中如何实现生命周期？

使用 useEffect：

类组件方法	对应的 useEffect 写法
componentDidMount	useEffect(() => {...}, [])
componentDidUpdate	useEffect(() => {...}, [依赖])
componentWillUnmount	useEffect(() => { return () => {...} }, [])
💬 三、常见追问题（面试官爱问）
❓ 4. componentDidMount 和 componentDidUpdate 区别？

componentDidMount：只执行一次，组件挂载后调用，可发请求。

componentDidUpdate：每次 props 或 state 变化后执行，用于响应更新。

❓ 5. shouldComponentUpdate 有什么用？

决定组件是否需要重新渲染。

常用于性能优化。

如果返回 false，render 不会执行。

函数组件中可用 React.memo 或 useMemo / useCallback 替代。

❓ 6. getSnapshotBeforeUpdate 有什么作用？

在 DOM 更新前 获取当前的 DOM 信息（如滚动位置）。

返回值会传递给 componentDidUpdate 的第三个参数。

❓ 7. React 18 为什么生命周期会执行两次？

因为 React.StrictMode（严格模式） 会在开发模式下让生命周期执行两遍，用来检测副作用问题。
生产环境不会重复执行。

❓ 8. componentWillMount / componentWillReceiveProps / componentWillUpdate 为什么被废弃？

因为它们在 React 的异步渲染（Fiber）中容易引发副作用和状态不一致问题。
React 官方建议使用 getDerivedStateFromProps 或 componentDidUpdate 替代。

❓ 9. useEffect 和 useLayoutEffect 区别？
Hook	执行时机	适用场景
useEffect	浏览器渲染后异步执行	网络请求、日志、异步操作
useLayoutEffect	DOM 更新后、绘制前同步执行	精准操作 DOM、避免闪烁
❓ 10. 组件卸载时应该在哪个生命周期清理副作用？

类组件：componentWillUnmount

函数组件：useEffect 的返回函数中

🧠 四、高级延伸题（区分熟练选手）
❓ 11. 在 componentDidUpdate 中 setState 会怎样？

会再次触发更新 → 可能造成无限循环

必须加条件判断，比如：

componentDidUpdate(prevProps) {
  if (prevProps.id !== this.props.id) {
    this.setState({ ... });
  }
}

❓ 12. React 组件更新流程是怎样的？

props 或 state 改变

执行 shouldComponentUpdate 判断是否更新

若返回 true → 重新 render

对比虚拟 DOM（diff）

更新真实 DOM

执行 componentDidUpdate

❓ 13. React Hooks 为什么要在组件顶层调用？

因为 React 需要在每次渲染时保持 Hook 调用顺序一致，否则会导致状态错乱。
所以不能在条件语句或循环中调用 Hook。

❓ 14. useEffect 为什么有依赖数组？

依赖数组控制副作用执行的时机：

[] → 只执行一次（挂载时）

[变量] → 变量变化时执行（更新时）

无依赖 → 每次 render 都执行

❓ 15. 如果要在函数组件中模拟 shouldComponentUpdate 怎么做？

可以使用：

React.memo(Component) —— 对比 props 是否变化；

或 useMemo / useCallback —— 缓存计算和函数引用。

💡 五、面试小总结（背诵模板）

React 生命周期分为挂载、更新和卸载三个阶段。
类组件通过 componentDidMount、componentDidUpdate、componentWillUnmount 等方法控制逻辑，
而函数组件使用 useEffect 实现相同功能。
在 React 18 开发模式下，StrictMode 会让生命周期执行两次用于检测副作用。
性能优化常用 shouldComponentUpdate、React.memo、useCallback、useMemo 等手段。