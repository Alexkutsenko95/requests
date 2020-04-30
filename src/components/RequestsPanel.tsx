import React,{ memo } from 'react';

import { ListDisplay } from './ListDisplay';

import './ListDisplay/ListDisplay.css';

interface IRequest {
    text: string;
    delay: number;
}

interface IList {
    list: Array<IRequest> ;
    setRun: (active : boolean) => void ;
    setDisplayedRequest: any ;
    addRequest: any ;
}

 const RequestsPanelComponent = ({ list,setRun,setDisplayedRequest,addRequest }: IList) => {

    const handlerRun = () => {
        setDisplayedRequest(list[0]);
        setRun(true)
    };
    return (
        <div className="List-Wrapper">
            <ListDisplay addRequest={addRequest} list={list}/>
            <button onClick={handlerRun}>
                Run
            </button>
        </div>
    );
};

export const RequestsPanel = memo(RequestsPanelComponent);