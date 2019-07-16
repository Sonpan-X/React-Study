#### react 学习
##### 简书项目入门
- state 有个immutable不允许我们做任何的改变 

#### 基础知识
 - jsx
 - state
 - props
 - ref
 - proptypes
 - defaultProps
 - setState()
 - 父子传值

#### 虚拟Dom
 - 1.Jsx模板
 - 2.state
 - 3.state数据和jsx组成

#### diff 算法
- react diff层级比对
  - 虚拟Dom是逐层比对，如果一层不满足，下面的节点都会重新被渲染
- key 
  - li 中的key会使Dom 与 对应的state绑定
  - 不用 index作key的原因，item的index可能会变  


#### 生命周期

 - initailization 初始化state 和 prop  

 - Mounting 
   - ComponentWillMount
   - render
   - ComponentDidMount

- Updation
  - props
    - WillRecieveProps
    - shouldComponentUpdate
    - componentWillUpdate
    - render()
    - componentDidUpdate   
  - state
    - shouldComponentUpdate
    - componentWillUpdate
    - render()
    - componentDidUpdate
- UnMounting    
  - componentWillUnmount