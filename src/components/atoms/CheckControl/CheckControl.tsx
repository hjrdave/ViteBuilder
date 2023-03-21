import React from 'react';
import { Form } from 'react-bootstrap';
import CheckControl from './CheckControl.interface';

export default function CheckControl(props: CheckControl) {

    return (
        <>
            <Form.Check
                {...props}
                onChange={(e: any) => props.onChange?.(e)}
            />
        </>
    )
}