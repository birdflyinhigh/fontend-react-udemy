#### 两种方式

+ 单页面应用
+ 多页面应用

#### 知识点

开始--> 下一代的JS语法 --> react基础语法 --> debugging --> styling component

--> component deep dive --> http request --> routing --> forms and validation --> redux 

--> authentication --> testing introduction --> deployment --> Bonus(Animation Next steps)


#### Key Points

1. code along 
2. check my source code 
3. practice practice practice 


### 下一代JS语法

#### 1. let&const 

    推荐使用let和const, 不用var
    let-->变量
    const --> 常量


#### 2.箭头函数 

```jsx harmony

//老式语法

function add(number) {
    return number+1;
}

//新式语法

const add = (number) => {
    return number +1;
};

const add = number => number +1 ;
```
箭头函数没有this的烦恼

#### 3. 导入导出  

##### 3.1 导出

```js
export default  person;
export const data = [1,2,3]

```

```js
import person from './person.js';

import ps from './person.js';

//导出default都是导入的person, 尽管名字不一样

import {data} from './person.js';

import {data as d } from './person.js'；
//导入特定的东西


```
#### 4. 理解类

以下为ES6推荐写法
```jsx harmony

class Person{
    name = "zoe";
    getName = () => this.name;
}

class Man extends Person{
    age = 29;
    getInfo = () => {
        console.log(this.name);
        console.log(this.age);
    }
}
```
#### 5. Spread & Rest Operator 

```jsx harmony
const A = [1, 2 ,3, 4]

const newA = [...A, 12, 34]

const o = {
    name: "taojian",
    age: 12,
}

const newO = {...o, color:'blue'}

```

#### 6. Destructuring

```jsx harmony
const a = [1, 2, 3, 4, 5];
const [b, c] = a;

const o = {
    name: 'zoe',
    age: 12,
}
const {name} = o;

```

Destructuring在function中非常好用，如果不使用，那么将传入一个总的object,不太好

比如
```jsx harmony
const printName = ({name}) => {
    console.log(name);
}

const o = {
    name: 'zoe',
    age: 27,
};
printName(o)
```

#### 7. primitive type和reference type 

##### 7.1 primitive type 
int 
float 
string 
##### 7.2 reference type 
object 
json_dict 

```jsx harmony
const person = {
    name: 'max'
}

const secondPerson = person;
// copy the references, pointing to the object
// anything changes in the copy, changes the original 

const secondPerson = {...person}
// copy all the properties of this person object
// anything changes in the copy, dont change the original
```

#### 8. Array Functions 

```jsx harmony
const numbers = [1, 2, 4]

const doubleNumberArray = numbers.map((num) => {
    return num*2;
})

const doubleNumberArray = numbers.map((number) => number*2);



```


Particularly important in this course are:

map()  => https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
find()  => https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find
findIndex()  => https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex
filter()  => https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
reduce()  => https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce?v=b
concat()  => https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/concat?v=b
slice()  => https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice
splice()  => https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice


### 理解基本语法

#### 1.The Basic workflow

+ How 
    + cnpm npm --> dependency management 
    + webpack --> use bundler 
    + Babel  --> Use Compiler 
    + Development Server 
    
#### 2. Use Create React App 


nmp添加淘宝源的方法:
```shell
npm config set registry https://registry.npm.taobao.org
```


create-react-app github: ?
+ steps
```shell
cnpm install -g create-react-app
create-react-app superset
cd superset 
npm start
# starting a server 
```

#### 3. Understand the folder structure


- index.html  
- index.js
- index.css 
- ./src 

#### 4. understand the component basic 

所有内容放在app Component里面, 必须有一个render方法，
并且返回一个div(jsx, looks like html, but it is not html)

use the practice before, not the React.createElement()
```jsx harmony
import React, {Component} from 'react';

class App extends Component{
    render(){
        return (
            <div className="App">
            <h1> hi, this is a react app</h1>
</div>
        )
}
}

export default App;
```

#### 5. JSX Restrictions

- class --> className 
- wrap everything into one root div 

```jsx harmony
<div> ... </div>
```

#### 6. Create a functional Component 

大多数情况下，是一个方法，returns 一些html， jsx

```jsx harmony
import React from 'react';


// ES6 语法，不要使用以前的语法

// return some jsx
const person = () => {
    return <p>i am a person</p>
};


export default person;

```

```jsx harmony
import React, { Component } from 'react';
import './App.css';

import Person from './Person'

class App extends Component {
  render() {
    return (
      <div className="App" >
        <h1>Cleaver Brooks</h1>
        <p>this is the client</p>
        <Person/>
      </div>
    );
  }
}

export default App;

```
实现代码的复用，并且可以传入参数，实现差异化动态生成

#### 7. Outputting Dynamic Content 

```js
const person = () => {
    return <p>i am a person, and i'm {Math.floor(Math.random()*30)} years old</p>
};

```

通过调用的时候传参，实现动态生成

#### 8. Working with Props

能够动态生成不同的内容。通过传参的方式props
```js
import React from 'react';


// ES6 语法，不要使用以前的语法

// return some jsx
const person = (props) => {
    return <p>i am {props.name}, and i'm {props.age} years old</p>
};


export default person;
```

```js
class App extends Component {
  render() {
    return (
      <div className="App" >
        <h1>Cleaver Brooks</h1>
        <p>this is the client</p>
        <Person name="Max" age="28"/>
        <Person name="Zoe" age="27"/>
        <Person name="Tao" age="25"/>
        <Person name="Zhou" age="26"/>
      </div>
    );
  }
}

export default App;

```

#### 9. Understanding the Children Property 
children 可以是任何内容，包括react component

anything between the <person>
```js
// return some jsx
const person = (props) => {
    return (
    <div>
        <p>i am {props.name}, and i'm {props.age} years old</p>
        <p>{props.children}</p>
    </div>
    );
};


export default person;

```

#### 10. understand using state 

内部参数  

```js
import React from 'react';


// ES6 语法，不要使用以前的语法

// return some jsx
const person = (props) => {

    state = {
        persons: [
            {name: 'Zhou', age: Math.floor(Math.random() * 30)},
            {name: 'Zoe', age: Math.floor(Math.random() * 30)},
            {name: 'Tao', age: Math.floor(Math.random() * 30)},
        ]
    }
    

    return (
        <div>
            <p>i am {this.state.persons[0].name}, and i'm {this.state.persons[0].age} years old</p>
            <p>i am {this.state.persons[1].name}, and i'm {this.state.persons[1].age} years old</p>
            <p>i am {this.state.persons[2].name}, and i'm {this.state.persons[2].age} years old</p>
        </div>
    );
};


export default person;
```
尽量使用function来return一些小的div片段

这种function只有一个目的，就是动态生成div to the dom.

#### 11. function components vs class components 

尽可能使用function components, 因为这种模式are very clear about what they will do .
this kind of component should only render something. is not allowed to change the state
of some component. 

state只能由几个类型，比如containers来改变。比如app container. 

大多数的function只是传入参数，然后生成一个div而已，不能改变state. 


#### 12. Passing method reference between components. 


可以通过props传入mother的一个方法索引，到一个小的components中，实现


- **推荐使用这个**
```js
this.onclick.bind(this, 'data')
```
- **不推荐使用这个，因为可能会有性能问题**
```js

onclick = () =>this.swithNameHandler('newName')
```


#### 13. Adding two ways binding 

需求，根据输入的内容改名称 


#### 14. Adding styling with stylesheet 

By adding a css stylesheet file
```css
.person{
    width: 60%;
    margin: 16px auto;
    border: 1px solid #eee;
    box-shadow:0 2px 3px #ccc;
    padding: 16px;
    text-align: center;

}
```
#### 15. Inline styling 
add styles directly in the jsx 

```css

const style={
    backgroundColor: 'white',
    font: 'inherit',
    border: '1px solid blue',
    padding: '8px',
    cursor:'pointer'
}

style={style}
```
### Working With List and Conditions

#### 1. output content conditionally 

show or hide all the persons. 


if else的简化语法
```js 

isShow? 
    <div></div>: null
```


#### 2. output list 

可以使用Map方法:

```js
<div>
    {this.state.persons.map(person =>{
        return <Person
            name={person.name}
            age= {person.age}
            changed={this.nameChangeHandler}
        />
    })}
</div>
```


#### 3. lists state 

delete list of state 

```js
const persons = this.state.persons;
persons.splice(index, 1);
this.setState({persons:persons});
//删除state 操作
```

#### 4. update state immutably. 

js objects 是reference type. 
当copy persons时，获得了原来的一个reference copy, 
任何对于copy的操作，会影响原来的state. 
**不推荐这个操作，而是用spread操作，获取一个属性的copy**
```js
const persons = [...this.state.persons];
```
#### 5. lists keys 

this key properties helps react update the component effectively

not efficiently if no key property 

the nomal practice is to add an id in the original state, then use 
that id as the key property for each render. 
this will improve the efficient. 

#### 6. flexible keys

更改state中的objects 
```js
const personIndex = this.state.persons.findIndex(p=> p.id===id);
const person = {...this.state.persons[personIndex]};// this one is recommanded.
// const person = object.assign({}, this.state.persons[personIndex]);

person.name = event.target.value;
const persons = [...this.state.persons];
persons[personIndex] = person;
this.setState({
    persons:persons,
});
```


### Styling react component

#### 1. outline the problem set 

+ inline style only applies to the extact component. 
+ inline style的好处是样式只应用于该component, 坏处是无法使用pseudo select,但是又无法使用pseudo在.css文件中，因为那样会导致所有的button都受影响
+ 需要解决的问题： 1. 可以在inline style中使用pseudo selector, 2. 可以动态改变样式


#### 2. setting styles Dynamically 
本体通过style object渲染，通过在事件中更改object的属性，实现样式的变动与事件绑定
可以在render前的任何一个地方更改样式，然后bind，那么样式就会生效

```js
        let persons = null;
        if (this.state.showPerson){
            persons = (<div>
                {this.state.persons.map((person, index) => {
                    return <Person
                        name={person.name}
                        age={person.age}
                        click={this.deletePersonHandler.bind(this, index)}
                        key={person.id}
                        changed={(event) => this.nameChangeHandler(event, person.id)}
                    />
                })}
            </div>);
            style.backgroundColor = 'red';
        }


        return (
            <div className="App">
                <h1>Cleaver Brooks</h1>
                <p>this is the client</p>
                <button style={style}
                        onClick={this.togglePersonHandler}>Swith Names
                </button>
                {persons}
            </div>
        );
```

#### 3.动态更改className

通过设置某种className的样式，在传入component前更改，然后将传入component中
不同的class名称，有不同的样式，在css file中



#### 4. Adding and Using Radium 

因为我们无法使用`hover`, pseudo selector在component中。hover is not a css property. 

**主要实现的方法**： 在inline-style中使用hover这种pseudo样式，那么使用**Radium包**

redium可以在inline style中使用pseudo selector和media styles 
```shell
npm install --save radium
```

```js
//用radium将component包起来即可，这样就可以在inline style中使用pseudo selector 
export default Radium(person);
```

```js

style = {
    ':hover': {
        backgroundColor: 'blue', // 使用驼峰式代替中划线式
        color: 'red'
    }
}

```

radium可以使用pseudo selector


#### 5. Using Radium for Media Queries 

#### 6. Enabling Using css Module 
问题: 是否可以将 pseudo css写在file里面，然后只应用到一个小的component上面呢？
尽管css名称是相同的，但是不会影响其他同名的className
+ 1. 首先去除掉所有的radium, 然后将所有的css样式写在css file中
+ 2. TWIKE THE BUILD CONFIGURATION IN THE PROJECT

在webpack_config.js中添加
```js
{
    importLoaders: 1,
    sourceMap: isEnvProduction && shouldUseSourceMap,
    modules: true,
    localIndentName: '[name]__[local]__[hash:base64:5]'
}

```
然后导入, 将`Classes.App`写在className的地方

```js
import Classes from './App.css';
```
所有这些的目的是将css的样式只供应到特定的tag上面，而不影响其他的tag

### Debugging react app

+ check into which line 
+ react developer tool in Chrome 


### Diving Deeper into Component React Internal 

#### 1. A Better Project Structure 

+ **render() method shouldn's involve too much UI rendering jsx**
+ outsource the jsx component not in the render() method. 
***
+ containers： 存放大体的container 
+ components: 存放所有的components
+ assets: 存放所有的静态资源
+ index.js： 存放入口

 
#### 2. Splitting An App Into Components 

+ Persons: 如果不需要manage state的话，可以用function components 

可以通props传 compenent的索引，可以传数据persons 

将每个小的component分解  

#### 3. compare stateless and statefull components

tateless 组件其实就是一个简单的接受传参的函数，而 stateful 组件 是拥有自己状态的组件。
什么时候该用有状态，什么时候该用无状态。

比如我有一个 dropdown 组件，我点击展开，就会出现下拉。这里就有一个状态 open ，值是 false 或者 true。我更倾向于把它写成一个 stateless 组件， open 的值通过父层传递。

但是把他写成有状态的也未曾不可，状态 open 的值通过父层传递，自己接管。

还是倾向于写 stateless 组件，因为省去了许多生命周期的 Hook，所以会有性能的提升，对 react 后面新的性能优化也有帮助。
而且状态都是通过父层传递，想想用 redux，那么状态都是可以保存的，本地或者服务器。
比如我展开了一个 dropdown，然后不小心刷新了页面，新的页面状态并没有丢失，所以 dropdown 还是展开的。这只是其中一个例子。

**You should create functional(stateless) components as often as possible**: 
+ these has a narrow focus and clear responsibility of what they do 
+ 这种不能manipulate state(dont do and can't do!), 因为app越大，越难manage state
+ 作用: 接收传参，应用一些逻辑，生成jsx
+ use class based component as less as possible --> manage state 
+ most component should be functional component
![stateless vs statefull component](https://note.youdao.com/yws/public/resource/2a660d1e6e1c3e6aef32382e4f86b57b/xmlnote/86A89A75D8C54860B0895F982CAF12E8/4777)



