import React, { Fragment } from 'react';

import { v4 as uuidv4 } from 'uuid';
import NumericInput from 'react-numeric-input';

import  Form, {
    ErrorMessage,
    Field,
    FormFooter,
} from '@atlaskit/form';
import TextField from '@atlaskit/textfield';
import Button from '@atlaskit/button';

import './ListDisplay.css';

interface IRequest {
    text: string;
    delay: number;
}

interface IList {
    list: Array<IRequest> ;
    addRequest: any
}

const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

export const ListDisplay = ({ list,addRequest }: IList) => {
    const getUser = async (value: string) => {
        await sleep(300);
        if (['jsmith', 'mchan'].includes(value)) {
            return 'IN_USE';
        }
        return undefined;
    };

    const validate = (value?: string) => {
        if (!value) return;

        if (value.length < 5) {
            return 'TOO_SHORT';
        }

        return getUser(value);
    };

    const handleSubmit = (data: { name: string, delay: number }) => {
        addRequest({...data,id:uuidv4()})
    };
    console.log('v:listlistlist:',list);
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
                                    <Fragment>
                                        <TextField {...fieldProps} />
                                        {error === 'TOO_SHORT' && (
                                            <ErrorMessage>
                                                Invalid username, needs to be more than 4 characters
                                            </ErrorMessage>
                                        )}
                                        {error === 'IN_USE' && (
                                            <ErrorMessage>
                                                Username already taken, try another one
                                            </ErrorMessage>
                                        )}
                                    </Fragment>
                                )}
                            </Field>
                            <Field
                                name="delay"
                                label="Delay"
                                defaultValue="1"
                                isRequired
                            >
                                {({ fieldProps, error, valid }) => (
                                    <Fragment>
                                        <input {...fieldProps} className="numeric" type="number" defaultValue={0} min={1} max={10}/>
                                        {error === 'TOO_SHORT' && (
                                            <ErrorMessage>
                                                Invalid username, needs to be more than 4 characters
                                            </ErrorMessage>
                                        )}
                                        {error === 'IN_USE' && (
                                            <ErrorMessage>
                                                Username already taken, try another one
                                            </ErrorMessage>
                                        )}
                                    </Fragment>
                                )}
                            </Field>


                            <FormFooter>
                                <Button type="submit">add</Button>
                            </FormFooter>
                        </form>
                    )}
                </Form>
            {list.length > 0 && list.map(({text,delay}) => <div>{text} - {delay}  - <span onClick={() => console.log('id::>>',delay)}>X</span></div>)}
        </div>
    );
};
