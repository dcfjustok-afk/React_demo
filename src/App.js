import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

// 导入页面组件
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";

function App() {
  return (
    <BrowserRouter>
      <div>
        <h2>React 路由示例</h2>

        {/* 导航栏 */}
        <nav>
          <Link to="/">首页</Link> |
          <Link to="/about">关于我们</Link> |
          <Link to="/contact">联系我们</Link>
        </nav>

        {/* 路由规则 */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
