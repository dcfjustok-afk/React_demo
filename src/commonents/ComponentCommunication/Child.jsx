// Child.jsx
function Child({ title, onMessage }) {
  const handleClick= ()=>{
    onMessage("子组件传递了消息！！");
  }
  // handleClick();
  return (
    <div style={{border:"1px solid red", padding:"10px"}}>
      <h2>子组件</h2>
      <h3>Hello, {title}</h3>
      <button onClick={handleClick}>点击我</button>
    </div>
  );
}
export default Child;
