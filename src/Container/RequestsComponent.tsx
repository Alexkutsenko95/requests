import React, {FunctionComponent, useEffect, useState} from "react";

import { IRequest} from "../common";
import { Requests } from '../components/Requests';
import { RequestsPanel } from '../components/RequestsPanel';


const RequestsComponent: FunctionComponent = (props: any) => {
    const [list, setList] = useState<IRequest[]>(props.list);
    const [run,setRun] = useState<boolean>(false);
    const [displayedRequest, setDisplayedRequest] = useState<any | undefined>(undefined);

    const { addRequest, removeRequest } = props;

    useEffect(() => {
        setList(props.list);
        setDisplayedRequest(props.list[0]);
    }, [props.list.length]);


    return (
        <div className="Wrapper">
            <RequestsPanel removeRequest={removeRequest} addRequest={addRequest} setDisplayedRequest={setDisplayedRequest} setRun={setRun} list={list} />
            <Requests setRun={setRun} run={run} setDisplayedRequest={setDisplayedRequest} displayedRequest={displayedRequest} list={list} />
        </div>
    );
};

export default RequestsComponent;


