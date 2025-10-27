State 
    State 即组件要用的数据
    前端必然是要展示数据的，react和vue的这类框架的核心就是把请求来的数据展示在页面上，
    数据更新后也需要响应式地展示新数据。React中的state就类似与vue中的data，
    都是用来做响应式的数据的。

State 的特点
    1、直接修改数据是无效的
        必须通过对应的方法修改state，才能触发组件的重新渲染。
    2、State修改是一个浅合并的过程，即只合并第一层属性，更深层的属性不会被合并。
        State的修改是一个浅合并的过程，即只合并第一层属性，更深层的属性不会被合并。
        例如：
        this.setState({
            a: 1,
            b: {
                c: 2
            }
        })
        这样修改state，只有a会被合并，b中的c属性不会被合并。

State 更新机制
    1、State的更新是异步的
        调用setState方法后，state并不会立即更新，而是会在稍后的时间点更新。
            setCount(count + 1);
            console.log(count); // 不会立刻变，会在稍后的时间点更新

    2、State的更新是批量的
        调用setState方法后，state并不会立即更新，而是会在稍后的时间点更新。
        例如：
        this.setState({
            a: 1,
        })
        this.setState({
            b: 2,
        })
        这样调用两次setState方法，state并不会立即更新，而是会在稍后的时间点更新。
        这是因为react会把多次调用setState方法合并成一次调用，
        从而提高性能。
    3、基于上一个更新时， 建议使用函数写法
        例如：
            setCount(count => count + 1);
    4、状态改变会触发组件重新渲染
        调用setState方法后，组件会重新渲染，展示最新的state数据。
        React会在state更新后，调用render方法重新渲染组件。 
        React 会根据新的state重新执行组件函数
        旧的state数据不会自动保留

注意点 
    1、不要直接修改对象或者数组，而是要创建新副本再更新
        setList([...list, 4]); // 正确
        list.push(4);          // ❌ 错误：直接修改原状态

State生命周期
    1、初始化
        组件创建时，会调用构造函数constructor，初始化state。
    2、挂载
        组件挂载到DOM上时，会调用生命周期方法componentDidMount。
    3、更新
        组件state或props发生变化时，会调用生命周期方法componentDidUpdate。
    4、卸载
        组件从DOM上卸载时，会调用生命周期方法componentWillUnmount。