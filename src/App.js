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
        showPerson: true,
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

    nameChangeHandler = (event, id) => {
        const personIndex = this.state.persons.findIndex(p=> p.id===id);
        const person = {...this.state.persons[personIndex]};// this one is recommanded.
        // const person = object.assign({}, this.state.persons[personIndex]);

        person.name = event.target.value;
        const persons = [...this.state.persons];
        persons[personIndex] = person;
        this.setState({
            persons:persons,
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
        persons.splice(index, 1)
        this.setState({
            persons:persons,
        })
    };

    render() {

        const style = {
            backgroundColor: 'black',
            color: 'white',
            font: 'inherit',
            border: '1px solid blue',
            padding: '8px',
            cursor: 'pointer',
        }

        let persons = null;
        let classes = []
        if (this.state.persons.length <=2) {
            classes.push('red')
        }

        if (this.state.persons.length <=1){
            classes.push('bold')
        }
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
                <p className={classes.join(' ')}>this is the client</p>
                <button style={style}
                        onClick={this.togglePersonHandler}>Swith Names
                </button>
                {persons}
            </div>
        );
    }
}

export default App;
