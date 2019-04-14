import React from 'react';

import Person from './Person/Person';


class Persons extends React.Component {
    constructor(props) {
        super(props);
        console.log('[Persons.js] inside constructor');
    }

    componentWillMount() {
        console.log('[Persons.js] inside componentWillMount');
    }

    componentDidMount() {
        console.log('[Persons.js] Inside componentDidMount')
    }

    render() {
        console.log('[Persons.js] inside render method')
        return this.props.persons.map((person, index) => {
            return <Person
                click={() => this.props.clicked(index)}
                name={person.name}
                age={person.age}
                key={person.id}
                changed={(event) => this.props.changed(event, person.id)}
            />
        });
    }
}


export default Persons;
