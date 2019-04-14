import React from 'react';
import Classes from './Cockpit.css';

const cockpit=(props)=>{
    let classes = [];
    let btnClass = "";
    if (props.showPerson){
        btnClass = Classes.red;
    }
    if (props.persons.length <= 2) {
        classes.push(Classes.red)
    }
    if (props.persons.length <= 1) {
        classes.push(Classes.bold)
    }
    return (
        <div className={Classes.Cockpit}>
            <h1>Cleaver Brooks</h1>
            <p className={classes.join(' ')}>{props.appTitle}</p>
            <button className={btnClass}
                    onClick={props.clicked}>Swith Names
            </button>
        </div>
    );
};


export default cockpit;