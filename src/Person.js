import React from 'react';


// ES6 语法，不要使用以前的语法

// return some jsx
const person = (props) => {
    return (
    <div>
        <p onClick={props.click}>i am {props.name}, and i'm {props.age} years old</p>
        <p>{props.children}</p>
        <input type="text" onChange={props.changed} value={props.name}/>
    </div>
    );
};


export default person;


