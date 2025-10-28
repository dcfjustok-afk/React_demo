// App.jsx
import React, { useState, createContext, useContext } from "react";

// 1️⃣ 创建 Context
const MessageContext = createContext();

function Grandparent() {
  const [msg, setMsg] = useState("初始消息");

  return (
    // 2️⃣ 使用 Provider 提供数据
    <MessageContext.Provider value={{ msg, setMsg }}>
      <div style={{ border: "2px solid blue", padding: "10px" }}>
        <h2>Grandparent</h2>
        <p>消息：{msg}</p>
        <Parent />
      </div>
    </MessageContext.Provider>
  );
}

function Parent() {
  return (
    <div style={{ border: "2px solid green", padding: "10px", marginTop: "10px" }}>
      <h3>Parent</h3>
      <Child />
    </div>
  );
}

function Child() {
  // 3️⃣ 使用 useContext 获取 Context
  const { msg, setMsg } = useContext(MessageContext);

  const handleClick = () => {
    setMsg("这是 Child 更新的消息！");
  };

  return (
    <div style={{ border: "2px solid red", padding: "10px", marginTop: "10px" }}>
      <h4>Child</h4>
      <button onClick={handleClick}>修改消息</button>
      <p>当前消息：{msg}</p>
    </div>
  );
}

export default Grandparent;
