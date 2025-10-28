import React from "react";

class MountDemo extends React.Component {
  constructor() {
    // 第一个执行的函数， 组件初始化执行， 可以初始化 state、绑定 this
    super();
    this.state = { count: 0 };
    console.log("constructor");
  }

  componentDidMount() {
    // 这里时 当组件挂载在真实DOM后执行， 可以进行 DOM 操作、发请求、添加事件监听等
    console.log("componentDidMount: 组件挂载完成");
  }

  render() {
    // render 主要是 用于 渲染 UI  ， 返回JSX
    console.log("render");
    return <div>{this.state.count}</div>;
  }
}

export default MountDemo;