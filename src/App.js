import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

// 导入页面组件
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import StateBatch from "./commonents/Demo/StateBatch";

function App() {
  return (
    <>
      <StateBatch />
    </>
  );
}

export default App;
