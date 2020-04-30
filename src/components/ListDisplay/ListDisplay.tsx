import React, { Fragment } from 'react';
import { v4 as uuidv4 } from 'uuid';
import  Form, { ErrorMessage, Field } from '@atlaskit/form';
import TextField from '@atlaskit/textfield';
import Button from '@atlaskit/button';

import trash from './icons8-trash.svg'
import './ListDisplay.css';
import { IRequest } from '../../common';


interface IListDisplay {
    list: Array<IRequest> ;
    addRequest: any;
    removeRequest: any ;
}

export const ListDisplay = ({ list,addRequest,removeRequest }: IListDisplay) => {

    const validate = (value?: string) => {
        if (!value) return;

    };

    const handleSubmit = (data: { name: string, delay: number }) => {
        addRequest({...data,id:uuidv4()})
    };

    return (
        <div className="list">
                <Form onSubmit={handleSubmit}>
                    {({ formProps }) => (
                        <form className="form-delay" {...formProps}>
                            <Field
                                name="text"
                                label="text"
                                defaultValue=""
                                isRequired
                                validate={validate}
                            >
                                {({ fieldProps, error, valid }) => (
                                    <TextField {...fieldProps} />
                                )}
                            </Field>
                            <Field
                                name="delay"
                                label="Delay"
                                defaultValue="1"
                                isRequired
                            >
                                {({ fieldProps, error, valid }) => (
                                        <input {...fieldProps} className="numeric" type="number" defaultValue={0} min={1} max={10}/>
                                )}
                            </Field>
                                <Button className="addButton" type="submit" appearance="primary">
                                    add
                                </Button>
                        </form>
                    )}
                </Form>
            {list.length > 0 && list.map(({text,delay,id}) => <div className="request"><span>text: {text}</span>  <span> delay:{delay}  </span>  <img src={trash} className="trash-icon" alt="logo" onClick={() => removeRequest(id)}/></div>)}
        </div>
    );
};
