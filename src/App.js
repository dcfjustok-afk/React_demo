import MountDemo from "./commonents/lifeCyber/MountDemo";
import UpdateDemo from "./commonents/lifeCyber/UpdateDemo";
import LifeCycleHooks from "./commonents/lifeCyber/LifeCycleHooks";

import "./App.css";
import { useState } from "react";
function App() {
  let [exist, setExist] = useState(true);
  return (
    <div>
      <div>
       {exist && <LifeCycleHooks></LifeCycleHooks>}
      </div>
      <button onClick={() => setExist(!exist)}>卸载组件</button>
    </div>
  );
}

export default App;
