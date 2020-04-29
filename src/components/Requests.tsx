import React, { useState, useEffect } from 'react';

import '../App.css';

interface IRequest {
    text: string;
    delay: number;
}

interface IList {
    list: Array<IRequest> ;
    displayedRequest: any;
    setDisplayedRequest: (request: IRequest) => void
    setRun: (active: boolean) => void
    run: boolean
}

export const Requests = ({ list, displayedRequest,setDisplayedRequest,setRun, run}: IList) => {
    const [timeLeft, setTimeLeft] = useState(displayedRequest.delay);

    const stop = () => {
        setDisplayedRequest(list[0]);
        setRun(false);
    };

    useEffect(() => {
        if(timeLeft === 0){
            const newRequest = list[list.findIndex(item => item.text === displayedRequest.text) + 1];

            newRequest ? setDisplayedRequest(newRequest) : stop() ;
        }

        if (!timeLeft) return;

        const intervalId = setInterval(() => {
            setTimeLeft(timeLeft - 1);
        }, 1000);

        return () => clearInterval(intervalId);
    }, [timeLeft]);

    useEffect(() => {
        setTimeLeft(displayedRequest.delay)
    }, [displayedRequest]);

    if(!run){
        return <div className="List-Wrapper"/>;
    }

    return (
        <div className="List-Wrapper">
         <div className="list">
            {displayedRequest.delay} - {displayedRequest.text}
            <h1>{timeLeft}</h1>
            <button onClick={() => stop()}>Stop</button>
         </div>
        </div>
    );
};
