import React, {Component} from 'react';
import './App.css';

import Person from './Person'

class App extends Component {
    state = {
        persons: [
            {id: '1', name: 'Zhou', age: Math.floor(Math.random() * 30)},
            {id: '2', name: 'Zoe', age: Math.floor(Math.random() * 30)},
            {id: '3', name: 'Tao', age: Math.floor(Math.random() * 30)},
        ],
        showPerson: false,
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

    nameChangeHandler = (event) => {
        this.setState({
            persons: [
                {name: 'Pole', age: Math.floor(Math.random() * 30)},
                {name: event.target.value, age: Math.floor(Math.random() * 30)},
                {name: 'Lin', age: Math.floor(Math.random() * 30)},
            ]
        });
    }
    togglePersonHandler = () => {
        this.setState({
                showPerson: !this.state.showPerson,
            }
        )

    }

    deletePersonHandler = (index) => {
        const persons = [...this.state.persons];
        persons.splice(index, 1);
        this.setState({
            persons:persons,
        });
    }

    render() {

        const style = {
            backgroundColor: 'white',
            font: 'inherit',
            border: '1px solid blue',
            padding: '8px',
            cursor: 'pointer'
        }


        return (
            <div className="App">
                <h1>Cleaver Brooks</h1>
                <p>this is the client</p>
                <button style={style}
                        onClick={this.togglePersonHandler}>Swith Names
                </button>
                {this.state.showPerson ?
                    <div>
                        {this.state.persons.map((person, index) => {
                            return <Person
                                name={person.name}
                                age={person.age}
                                click={this.deletePersonHandler.bind(this, index)}
                                key={person.id}
                            />
                        })}
                    </div> : null
                }
            </div>
        );
    }
}

export default App;
