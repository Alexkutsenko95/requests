import React, { Fragment } from 'react';
import { ListDisplay } from './ListDisplay';

import './ListDisplay.css';

interface IRequest {
    text: string;
    delay: number;
}

interface IList {
    list: Array<IRequest> ;
    setRun: (active : boolean) => void ;
}


export const RequestsPanel = ({ list,setRun }: IList) => {

    return (
        <div className="List-Wrapper">
            <ListDisplay list={list}/>
            <button onClick={() => setRun(true)}>
                Run
            </button>
        </div>
    );
};
