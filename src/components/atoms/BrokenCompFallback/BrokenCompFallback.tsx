import React from 'react';
import { Button, Form } from 'react-bootstrap';

interface Props{
    variant?: 'button' | 'control' | 'default';
};

export default function BrokenCompFallback({ variant }: Props){

    return(
        <>
            {
                (variant === 'button') ? <Button variant={'primary'} disabled>Error</Button> :
                (variant === 'control') ? <Form.Control disabled value={'Error'}/> :
                <div className={"d-flex flex-column align-items-center p-3"}>
                    <i className="fa-solid fa-triangle-exclamation text-primary" style={{fontSize: "5rem"}}></i>
                    <p className={"pt-3"}>Something went wrong.</p>
                </div>
            }
        </>
    )
}