import React, {Component} from 'react';
import Classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';

class App extends Component {
    state = {
        persons: [
            {id: '1', name: 'Zhou', age: Math.floor(Math.random() * 30)},
            {id: '2', name: 'Zoe', age: Math.floor(Math.random() * 30)},
            {id: '3', name: 'Tao', age: Math.floor(Math.random() * 30)},
        ],
        showPerson: true,
    };
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
    };

    nameChangeHandler = (event, id) => {
        const personIndex = this.state.persons.findIndex(p => p.id === id);
        const person = {...this.state.persons[personIndex]};// this one is recommanded.
        // const person = object.assign({}, this.state.persons[personIndex]);

        person.name = event.target.value;
        const persons = [...this.state.persons];
        persons[personIndex] = person;
        this.setState({
            persons: persons,
        });
    };
    togglePersonHandler = () => {
        this.setState({
                showPerson: !this.state.showPerson,
            }
        )

    };

    deletePersonHandler = (index) => {
        const persons = [...this.state.persons];
        persons.splice(index, 1)
        this.setState({
            persons: persons,
        })
    };

    render() {
        let persons = null;
        if (this.state.showPerson) {
            persons = (<div>
                <Persons
                persons={this.state.persons}
                clicked={this.deletePersonHandler}
                changed={this.nameChangeHandler}
                />
            </div>);
        }

        return (
            <div className={Classes.App}>
                <Cockpit
                    appTitle={this.props.title}
                    showPersons={this.state.showPerson}
                    persons={this.state.persons}
                    clicked={this.togglePersonHandler}
                />
                {persons}
            </div>
        );
    }
}

export default App;
