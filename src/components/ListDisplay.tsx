import React, { Fragment } from 'react';
import NumericInput from 'react-numeric-input';

import  Form, {
    ErrorMessage,
    Field,
    FormFooter,
    HelperMessage,
    ValidMessage
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
}

const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

export const ListDisplay = ({ list }: IList) => {
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

    const handleSubmit = (data: { password: string }) => {
        console.log(data);
    };


    return (
        <div className="list">
                <Form onSubmit={handleSubmit}>
                    {({ formProps }) => (
                        <form className="form-delay" {...formProps}>
                            <Field
                                name="username"
                                label="Username"
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
                            <input className="numeric" type="number" min={1} max={10}/>
                            <FormFooter>
                                <Button type="submit">add</Button>
                            </FormFooter>
                        </form>
                    )}
                </Form>
            {list.map(({text,delay}) => <div>{text} - {delay}</div>)}
        </div>
    );
};
