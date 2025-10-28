import { useState, useEffect } from "react";

function LifeCycleHooks() {
  const [count, setCount] = useState(0);

  // 1️⃣ 模拟 componentDidMount（仅执行一次）
  useEffect(() => {
    // 组件挂载时执行
    console.log("🔹 组件挂载完成（componentDidMount）");
    return () => {
      // 组件卸载时执行
      console.log("🧹 组件卸载（componentWillUnmount）");
    };
  }, []);

  // 2️⃣ 模拟 componentDidUpdate（count 更新时触发）
  useEffect(() => {
    console.log("🔁 count 变化，组件更新（componentDidUpdate）");
  }, [count]);

  console.log("🎨 render 渲染");

  return (
    <div>
      <h3>当前计数：{count}</h3>
      <button onClick={() => setCount(count + 1)}>+1</button>
    </div>
  );
}

export default LifeCycleHooks;
