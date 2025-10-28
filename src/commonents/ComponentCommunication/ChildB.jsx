function ChildB({ message, onSend }) {
  return (
    <div style={{border:"1px solid red", padding:"10px"}}>
      <h3>子组件B</h3>
      <p>子组件B收到: {message}</p>
      <button onClick={() => onSend("来自B组件的数据")}>发送给A</button>
    </div>
  );
}
export default ChildB;