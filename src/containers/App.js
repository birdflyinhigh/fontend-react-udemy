import React, {Component} from 'react';
import Classes from './App.css';
import Bar from '../charts/bar';


class App extends Component {

    render() {
        return (
            <div className={Classes.App} id='app'>
                <Bar/>
            </div>
        );
    }
}

export default App;
