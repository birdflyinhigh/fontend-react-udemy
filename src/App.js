import React, {Component} from 'react';
import './App.css';

import Person from './Person'

class App extends Component {
    state = {
        persons: [
            {name: 'Zhou', age: Math.floor(Math.random() * 30)},
            {name: 'Zoe', age: Math.floor(Math.random() * 30)},
            {name: 'Tao', age: Math.floor(Math.random() * 30)},
        ]
    }
    swithNameHandler = () => {
        // alert('this is clicked');
        // DONT DO THIS
        // this.state.persons[0] = 'taojian'
        this.setState({
            persons: [
                {name: 'Pole', age: Math.floor(Math.random() * 30)},
                {name: 'Jia', age: Math.floor(Math.random() * 30)},
                {name: 'Lin', age: Math.floor(Math.random() * 30)},
            ]
        });
    }

    render() {
        return (
            <div className="App">
                <h1>Cleaver Brooks</h1>
                <p>this is the client</p>
                <button onClick={this.swithNameHandler}>Swith Names</button>
                <Person name={this.state.persons[0].name} age={this.state.persons[0].age} click={this.swithNameHandler}> i have a hobby </Person>
                <Person name={this.state.persons[1].name} age={this.state.persons[1].age}/>
                <Person name={this.state.persons[2].name} age={this.state.persons[2].age}/>
            </div>
        );
    }
}

export default App;
