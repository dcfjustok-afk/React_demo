import React from "react";

class LifeCycleDemo extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
    console.log("constructor执行，初始化组件");
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    console.log("getDerivedStateFromProps执行，根据props更新state");
    return null; // 一般返回新 state 或 null
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("shouldComponentUpdate执行，判断是否需要更新组件");
    return true; // 返回 false 可阻止更新
  }

  render() {
    console.log("render执行，渲染组件");
    return (
      <div>
        <h3>当前计数：{this.state.count}</h3>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          +1
        </button>
      </div>
    );
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("getSnapshotBeforeUpdate执行，在更新前获取快照信息，用于保存一些 DOM 状态");
    return "快照信息"; // 会传给 componentDidUpdate 的第三个参数
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("componentDidUpdate执行，组件更新完成");
    console.log("snapshot:", snapshot);
  }

  componentDidMount() {
    console.log("componentDidMount执行，组件挂载完成");
  }

  componentWillUnmount() {
    console.log("componentWillUnmount执行，组件卸载前调用");
  }
}

export default LifeCycleDemo;
