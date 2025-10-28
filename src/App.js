import Parent from "./commonents/ComponentCommunication/Parent";
import Grandparent from "./commonents/ComponentCommunication/Grandparent";



import "./App.css";
import { useState } from "react";
function App() {
  let [exist, setExist] = useState(true);
  return (
    <div>
      <Parent></Parent>
      <div style={{ margin: "20px" }}></div>
      <Grandparent></Grandparent>
    </div>
  );
}

export default App;
