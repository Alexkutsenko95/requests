import React,{ useState } from 'react';

import { Requests } from './components/Requests';
import { RequestsPanel } from './components/RequestsPanel';
import './App.css';

interface IList {
    text: string;
    delay: number;
}

function App() {
    const [list, setList] = useState<IList[]>([{text: 'firstDelay', delay:8 },{text: 'nextDelay', delay:10 },]);
    const [run,setRun] = useState<boolean>(false);
    const [displayedRequest, setDisplayedRequest] = useState<any | undefined>({text: 'firstDelay', delay:8 });

    console.log('displayedRequest::.',displayedRequest);

    return (
        <div className="App">
            <header className="App-header">
                <h1>Request simulator</h1>
            </header>
            <div className="Wrapper">
               <RequestsPanel setRun={setRun} list={list} />
               <Requests setRun={setRun} run={run} setDisplayedRequest={setDisplayedRequest} displayedRequest={displayedRequest} list={list} />
            </div>
        </div>
    );
}

export default App;
