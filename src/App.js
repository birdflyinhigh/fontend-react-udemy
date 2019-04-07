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
    swithNameHandler = (newName) => {
        // alert('this is clicked');
        // DONT DO THIS
        // this.state.persons[0] = 'taojian'
        this.setState({
            persons: [
                {name: 'Pole', age: Math.floor(Math.random() * 30)},
                {name: newName, age: Math.floor(Math.random() * 30)},
                {name: 'Lin', age: Math.floor(Math.random() * 30)},
            ]
        });
    }

    render() {
        return (
            <div className="App">
                <h1>Cleaver Brooks</h1>
                <p>this is the client</p>
                <button onClick={this.swithNameHandler.bind(this, 'Zhou Zhi')}>Swith Names</button>
                <Person name={this.state.persons[0].name} age={this.state.persons[0].age} click={this.swithNameHandler.bind(this, 'Tao Jian')}> i have a hobby </Person>
                <Person name={this.state.persons[1].name} age={this.state.persons[1].age}/>
                <Person
                    name={this.state.persons[2].name}
                    age={this.state.persons[2].age}
                    click={()=>this.swithNameHandler('666')}

                />
            </div>
        );
    }
}

export default App;
