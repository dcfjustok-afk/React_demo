hash路由与history路由
    React Router 提供了两种不同的路由模式：Hash 路由和 History 路由。
    是实现前端路由的两种核心模式，分别对应不同的路由实现方式。

为什么要使用路由
    单页应用（SPA）需要在不刷新页面的情况下，根据 URL 动态加载不同的内容。
    路由允许我们根据 URL 来导航到不同的页面组件，实现无刷新的页面切换。
也就是说，当你点击导航链接时：
    1.浏览器地址栏变化了；
    2.但实际上没有向服务器重新发请求；
    3.而是前端“拦截”了路径变化，根据路径展示不同的组件。

1、hash路由
    基本概念：
        hash路由是基于URL的hash部分（#号后面的内容）**锚点部分** 来实现路由的。
        当hash值发生变化时，浏览器会触发hashchange事件，我们可以通过监听该事件来实现路由的切换。
    实例：
        http://localhost:3000/#/home
        http://localhost:3000/#/about

    “#” 号后面的内容不会被浏览器发送给服务器；
    改变 “#” 后面的内容不会导致页面刷新；
    浏览器会触发 **** hashchange **** 事件；
    React Router 内部通过监听该事件来切换组件。

    原理图解：
                URL: http://localhost:3000/#/about
                        └───────┬────────┘
                                ↓
                        浏览器触发 hashchange
                                ↓
                        React Router 捕获变化
                                ↓
                        根据路径渲染 <About/> 组件

    实现原理
        window.addEventListener("hashchange", () => {
        const path = location.hash.slice(1); // 去掉 #
        console.log("当前路由是：", path);
        });
    每当#后面的部分发生变化时，都会触发回调函数 

    优点：
        1. 简单易用，无需服务器配置。
        2. 兼容性好，支持所有现代浏览器。
        3. 无需服务器端支持，适用于静态站点。
    缺点：
        1. 路由路径中包含 # 号，不美观。
        2. 对SEO不友好 ， 搜索引擎不会索引包含 # 号的 URL。
        3. 不符合RESTful风格，URL中包含了路由信息。

2、history路由
    基本概念：
        history路由是基于HTML5的History API来实现路由的。 history.pushState() 和 history.replaceState() 方法可以用来修改浏览器的URL，而不会触发页面刷新。
        当URL发生变化时，浏览器会触发popstate事件，我们可以通过监听该事件来实现路由的切换。
    实例：
        http://localhost:3000/home
        http://localhost:3000/about
 
    URL: http://localhost:3000/about
           ↓
        调用 history.pushState()
                ↓
        React Router 监听路径变化
                ↓
        渲染对应的 <About/> 组件
    原理图解：
        URL: http://localhost:3000/about
                ↓
        调用 history.pushState()
                ↓
        React Router 监听路径变化
                ↓
        渲染对应的 <About/> 组件

    实现原理（简版）
        // 改变 URL
        history.pushState({}, "", "/home");

        // 监听路径变化
        window.addEventListener("popstate", () => {
        console.log("当前路径：", location.pathname);
        });
    
    优点：
        1. 路由路径 clean，符合 RESTful 风格。
        2. 对 SEO 友好，搜索引擎可以索引包含路径的 URL。
        3. 符合 RESTful 风格，URL 中包含了路由信息。
    缺点：
        1. 需要服务器端支持，因为路由是基于 URL 路径的。 刷新页面时向服务器发请求
        2. 部署时需要注意，需要服务器端配置，否则刷新页面时会返回 404 错误。

下面实例是 在React中使用BrowserRouter实现history路由

import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import About from "./About";

function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/home">首页</Link>
        <Link to="/about">关于</Link>
      </nav>

      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}   

服务端配置
    如果使用BrowserRouter，当用户手动刷新 /about页面时。
    浏览器会向服务器请求 /about 路径的资源。但服务器并没有这个路径，就会返回404错误。
    解决方法：
        服务器要配置所有的请求都重定向到 index.html 。 让前端路由接管所有的路由请求。
        当用户请求 /about 时，服务器会返回 index.html ，React Router 会在客户端根据路径渲染 <About/> 组件。
    例如Nginx配置：
        location / {
            try_files $uri /index.html;
        }
    
两者对比总结
    对比项	            HashRouter	                            BrowserRouter
    URL 形式	       /#/home	                                /home
    原理	           监听 hashchange	                        HTML5 History API
    是否会请求服务器	否	                                    刷新会请求服务器
    兼容性	           ✅ 旧浏览器也支持	                        ❌ 需现代浏览器
    SEO 友好	       差	                                    好
    是否需要服务端配置	否	                                    需要
    使用场景	       静态网站、GitHub Pages	                        正式项目、生产环境

