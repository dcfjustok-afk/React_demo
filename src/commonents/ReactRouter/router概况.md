React Router 
    是 React 官方的路由库，用于管理单页应用的路由。

什么是React Router？
    在传统多页应用中，浏览器访问不同的 URL，会向服务器发送请求，服务器返回不同的页面。
    而在 React 单页应用（SPA） 中，整个项目通常只有一个 index.html。
React 路由的作用就是：
    在不刷新页面的情况下，根据不同的 URL，显示不同的组件内容。
所以：
    URL 在变化；
    但页面不会重新加载；
    React 通过“前端路由”控制组件的切换。

组件：
    组件	                作用
    <BrowserRouter>	        路由器容器，包裹整个应用
    <Routes>	            路由规则容器（v6 新增）
    <Route>	                定义路径与组件的对应关系
    <Link>	                跳转导航链接（不会刷新页面）
    <NavLink>	            带“选中高亮”的导航链接
    useNavigate()	        编程式导航（在代码中跳转）
    useParams()	            获取动态路由参数
    useLocation()	        获取当前 URL 信息
    useSearchParams()	    读写 URL 查询参数（?key=value）

动态路由参数
    动态路由参数是指在路由路径中定义的参数，用于匹配不同的 URL。
    例如，/user/:id 中的 :id 就是一个动态路由参数，它可以匹配 /user/123、/user/456 等不同的 URL。
    当访问 /user/123 时，useParams() 会返回 { id: '123' }；
    当访问 /user/456 时，useParams() 会返回 { id: '456' }。
    动态路由参数可以在组件中使用，例如：
        function UserProfile() {
            const params = useParams();
            return <h1>User Profile: {params.id}</h1>;
        }

嵌套路由（子路由）
    嵌套路由是指在路由中定义子路由，用于实现更复杂的页面结构。
    例如，/user/:id 下可以有 /user/:id/profile、/user/:id/settings 等子路由。
    子路由可以在父路由的组件中定义，例如：
        function UserProfile() {
            const params = useParams();
            return (
                <div>
                    <h1>User Profile: {params.id}</h1>
                    <Routes>
                        <Route path="profile" element={<Profile />} />
                        <Route path="settings" element={<Settings />} />
                    </Routes>
                </div>
            );
        }
    当访问 /user/123/profile 时，会渲染 <Profile /> 组件；
    当访问 /user/123/settings 时，会渲染 <Settings /> 组件。

    还有比如在 /about 页面中还有子页面：
        /about/team
        /about/history
    实现如下：
        <Route path="/about" element={<About />}>
            <Route path="team" element={<Team />} />
            <Route path="history" element={<History />} />
        </Route>
    在 <About /> 组件中，需要添加 <Outlet /> 组件，用于渲染子路由的内容。
    例如：
        function About() {
            return (
                <div>
                    <h1>About</h1>
                    <Outlet />              ****这是一个占位符，用于渲染子路由的内容****
                </div>
            );
        }

重定向   Navigate
    当访问某个路径时，自动跳转到另一个路径。
        例如：
            <Route path="/" element={<Navigate to="/home" />} />
        当访问 / 时，会自动跳转到 /home。
    也可以在组件中使用 Navigate 组件，例如：
        function Home() {
            return (
                <div>
                    <h1>Home</h1>
                    <Navigate to="/about" />
                </div>
            );
        }
    当访问 /home 时，会自动跳转到 /about。

编程式导航
    除了使用 <Link> 组件进行导航外，还可以使用 useNavigate() 钩子函数进行编程式导航。
    例如：
        function Home() {
            const navigate = useNavigate();
            return (
                <div>
                    <h1>Home</h1>
                    <button onClick={() => navigate('/about')}>Go to About</button>
                </div>
            );
        }
    当点击按钮时，会自动跳转到 /about。

读取URL参数与查询参数
    useParams() 可以读取动态路由参数，例如：
        function UserProfile() {
            const params = useParams();
            return <h1>User Profile: {params.id}</h1>;
        }
    当访问 /user/123 时，会渲染 <h1>User Profile: 123</h1>。

    useSearchParams() 可以读取查询参数，例如：
        function Search() {
            const [searchParams, setSearchParams] = useSearchParams();
            const query = searchParams.get('query');
            return <h1>Search Query: {query}</h1>;
        }
    当访问 /search?query=react 时，会渲染 <h1>Search Query: react</h1>。