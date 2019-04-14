import React from 'react';
import classes from './person.css';


// ES6 语法，不要使用以前的语法

// return some jsx
class Person extends React.Component{
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className={classes.person}>
                <p onClick={this.props.click}>i am {this.props.name}, and i'm {this.props.age} years old</p>
                <p>{this.props.children}</p>
                <input type="text" onChange={this.props.changed} value={this.props.name}/>
            </div>
        );
    }
}


export default Person;


