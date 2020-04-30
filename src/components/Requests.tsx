import React, { useState, useEffect, memo } from 'react';
import { IRequest } from '../common'
import '../App.css';

interface IRequestsComponent {
    list: any ;
    displayedRequest: any;
    setDisplayedRequest: (request: IRequest) => void
    setRun: (active: boolean) => void
    run: boolean
}

const RequestsComponent = ({ list, displayedRequest,setDisplayedRequest,setRun, run}: IRequestsComponent) => {
    const [timeLeft, setTimeLeft] = useState(displayedRequest ? displayedRequest.delay : undefined);

    const stop = () => {
        setDisplayedRequest(list[0]);
        setRun(false);
    };

    useEffect(() => {
        if(timeLeft === 0){
            const newRequest = list[list.findIndex((item: any) => item.id === displayedRequest.id) + 1];

            newRequest ? setDisplayedRequest(newRequest) : stop() ;
        }

        if (!timeLeft) return;

        const intervalId = setInterval(() => {
            setTimeLeft(timeLeft - 1);
        }, 1000);

        return () => clearInterval(intervalId);
    }, [timeLeft]);


    useEffect(() => {

        if(displayedRequest){
            setTimeLeft(displayedRequest.delay)
        }

    }, [list.length,displayedRequest,run]);

    if(!run || !displayedRequest ){
        return <div className="List-Wrapper"/>;
    }


    return (
        <div className="List-Wrapper">
         <div className="loader"/>
         <div className="list text-align">
                 {displayedRequest ? `text: ${displayedRequest.text}`: '' }
            <h1>{timeLeft}</h1>
         </div>

        </div>
    );
};
export const Requests= memo(RequestsComponent)
