function ChildA({ message, onSend }) {
  return (
    <div style={{ border: "1px solid blue", padding: "10px" }}>
      <h3>子组件A</h3>
      <p>子组件A收到: {message}</p>
      <button onClick={() => onSend("来自A组件的数据")}>发送给B</button>
    </div>
  );
}
export default ChildA;
