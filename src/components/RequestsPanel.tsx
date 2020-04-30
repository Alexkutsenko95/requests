import React,{ memo } from 'react';
import Button from '@atlaskit/button';

import { ListDisplay } from './ListDisplay';
import { IRequest } from '../common';

import './ListDisplay/ListDisplay.css';

interface IList {
    list: Array<IRequest> ;
    setRun: (active : boolean) => void ;
    setDisplayedRequest: any ;
    addRequest: any ;
    removeRequest: any ;
}

 const RequestsPanelComponent = ({ list,setRun,setDisplayedRequest,addRequest,removeRequest }: IList) => {

     const stop = () => {
         setDisplayedRequest(list[0]);
         setRun(false);
     };

    const handlerRun = () => {
        setDisplayedRequest(list[0]);
        setRun(true)
    };

    return (
        <div className="List-Wrapper">
            <ListDisplay removeRequest={removeRequest} addRequest={addRequest} list={list}/>
            {list.length > 0 && <div className="button-wrapper">
                <Button className="button mr" appearance="primary" onClick={handlerRun}>
                Run
            </Button>
                <Button className="button" appearance="danger" onClick={() => stop()}>Stop</Button>
                <div/>
            </div>}
        </div>
    );
};

export const RequestsPanel = memo(RequestsPanelComponent);