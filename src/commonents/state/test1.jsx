import { react, useState } from "react";
function Test1() {
  const [objA, setObjA] = useState({
    a: 111,
  });
  
  let b="222";
  // 下面这个b是一个普通的变量，不是react的state ， 不会修改
  setTimeout(()=>{
    b=333;
  },1000)
  // 下面这个objA是一个react的state ， 会修改
  setTimeout(()=>{
    //需要用setObjA更新objA， 不能直接修改objA
    setObjA({
      a: 444,
    })
  },2000)
  return (
    <div>
      <p>{objA.a}</p>
      {/* 下面这个b是一个普通的变量，不是react的state ， 不会修改  */}
      <p>{b}</p>
      
    </div>
  );
}
export default Test1;
