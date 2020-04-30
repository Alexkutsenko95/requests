import React, {FunctionComponent, useEffect} from "react";
import { Requests } from '../components/Requests';
import { RequestsPanel } from '../components/RequestsPanel';
import {useState} from "react";

interface IList {
    text: string;
    delay: number;
}


const RequestsComponent = (props: any) => {
    const [list, setList] = useState<IList[]>(props.list);
    const [run,setRun] = useState<boolean>(false);
    const [displayedRequest, setDisplayedRequest] = useState<any | undefined>(undefined);

    const { addRequest } = props;

    useEffect(() => {
        setList(props.list);
        setDisplayedRequest(props.list[0]);
    }, [props.list.length]);


    return (
        <div className="Wrapper">
            <RequestsPanel addRequest={addRequest} setDisplayedRequest={setDisplayedRequest} setRun={setRun} list={list} />
            <Requests setRun={setRun} run={run} setDisplayedRequest={setDisplayedRequest} displayedRequest={displayedRequest} list={list} />
        </div>
    );
};

export default RequestsComponent;


