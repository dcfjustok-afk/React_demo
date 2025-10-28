// Parent.jsx
import Child from "./Child";
import { useState, useEffect } from "react";
import ChildA from "./ChildA";
import ChildB from "./ChildB";

function Parent() {
  const name = "这是父组件传递给子组件的标题";
  const [msg, setMsg] = useState("");
  useEffect(()=>{
    setMsg("暂无消息");
  },[])
  const handleMessage=(msg)=>{
    console.log("子组件传递过来的消息:", msg);
    setMsg(msg);
  }
  const [message, setMessage] = useState("");
  return (
    <div>
      <h2>父组件</h2>
      <h3>子组件传递过来的消息：{msg||"暂无消息"}</h3>
      <Child  title={name}  onMessage={handleMessage} />
      <div>
        <ChildA   message={message} onSend={setMessage} />
        <ChildB   message={message} onSend={setMessage} />
      </div>
    </div>
    
  );
}
export default Parent;