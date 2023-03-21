import React from 'react';
import { Card, Col, Row, Button } from 'react-bootstrap';

interface Props{
    title?: string;
    description?: string;
    tellMeMoreLink?: string;
    btnType?: 'add' | 'remove';
    onClick?: () => void;
    price?: string;
};
export default function AddOnCard({title, description, tellMeMoreLink, btnType, onClick, price}: Props){

    return(
        <>
            <Card className={"shadow"}>
                <Card.Body>
                    <Col className={"py-3"}>
                        <Row className={"d-flex justify-content-between"}>
                            <Col sm="8">
                                <div>
                                    <p className={"text-primary fw-bold mb-0"}>{title}</p>
                                    <p>{description}</p>
                                    <Button variant='link' onClick={onClick} href={tellMeMoreLink} className={'ps-0'}>
                                        <i className="fa-regular fa-circle-question pe-2 fs-6"></i>
                                        Tell me more
                                    </Button>
                                </div>
                            </Col>
                            <Col className={"d-flex flex-column align-items-end"}>
                                <p className={"h3 mb-0"}><strong>{price}</strong></p>
                                <p><small>per day</small></p>
                                {
                                    (btnType === 'remove') ?
                                    <Button variant='primary'>Remove</Button> :
                                    <Button variant='outline-primary'>Add</Button>
                                }
                            </Col>
                        </Row>
                    </Col>
                </Card.Body>
            </Card>
        </>
    )
}