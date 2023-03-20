import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import CardBadge from '../../atoms/CardBadge';

interface Props{
    title?: string;
    startingAt: string;
    includes?: {
        text: JSX.Element | string;
    }[];
    onSelect?: () => void;
    isRecommended: boolean;
};

export default function ProductCard({title, startingAt, includes, onSelect, isRecommended}: Props){

    return(
        <>
        <Card>
            <Card.Header className={'d-flex justify-content-end p-0'}>
                {
                    (isRecommended) ? <CardBadge variant='primary' label={'Recommended'}/> : null
                }
            </Card.Header>
            <Card.Body>
                <Card.Title className={"text-primary fs-2"}>
                    {title}
                </Card.Title>
                <div className={"d-flex align-items-center pt-3"}>
                    {
                        (startingAt) ?
                            <>
                                <Card.Subtitle className="pe-3 mb-2 text-muted">
                                    Starting at:
                                </Card.Subtitle>
                                <p className={"fs-1 fw-bold"}>{startingAt}</p>
                            </> : null
                    }
                </div>
                <Card.Text>
                    {
                        (includes) ? 
                        <p><small className={"text-primary"}><strong>Includes:</strong></small></p> : null
                    }
                    {
                        includes?.map((item) => (
                            <React.Fragment>
                                <div className={'d-flex'}>
                                    <i className="fa-regular fa-square-check text-success pe-2 fs-5"></i>
                                    <p>{item.text}</p>
                                </div>
                            </React.Fragment>
                        ))
                    }
                </Card.Text>
            </Card.Body>
            <Card.Footer className={'d-flex justify-content-center pb-4'}>
                {
                    (onSelect) ? <Button variant='secondary' className={'w-75'} onClick={onSelect}>Select</Button> : null
                }
            </Card.Footer>
        </Card>
        </>
    )
}