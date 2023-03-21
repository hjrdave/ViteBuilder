import React from 'react';
import {Row, Col, Button} from 'react-bootstrap';
import styles from './PreviousPageBar.module.scss';

interface Props{
    onPreviousClick: () => void;
    previousBtnLabel: string;
    text?: string;
};

export default function PreviousPageBar({onPreviousClick, previousBtnLabel, text}: Props){

    return(
        <>
            <Row className={`py-1 px-3 ${styles.compContainer}`}>
                <Col sm={3}>
                    <Button variant='bg-none' onClick={onPreviousClick} className={'text-white ps-0 d-flex align-items-center'}>
                        <i className={`fa-solid fa-circle-chevron-left pe-2 fs-4 ${styles.prevIcon}`}></i>
                        {previousBtnLabel}
                    </Button>
                </Col>
                <Col className={"d-flex align-items-center justify-content-end"}>
                    <p className={"mb-0 text-white"}><strong>{text}</strong></p>
                </Col>
            </Row>
        </>
    )
}