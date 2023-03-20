import React from 'react';
import { Button } from 'react-bootstrap';
import Form from '../../organisms/Form/Form.interface';

interface Props extends Form.BaseButtonProps { };

export default function FormSubmit({ children, onClick, ...props }: Props) {

    return (
        <>
            <Button type={'submit'} {...props}>
                {(children) ? children : 'Submit'}
            </Button>
        </>
    )
}