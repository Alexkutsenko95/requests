import React, { FunctionComponent } from 'react';

import Requests from './Container/index';
import './App.css';



const App: FunctionComponent = () => {

    return (
        <div className="App">
            <header className="App-header">
                <h1>Request simulator</h1>
            </header>
        <Requests/>
        </div>
    );
};

export default App;