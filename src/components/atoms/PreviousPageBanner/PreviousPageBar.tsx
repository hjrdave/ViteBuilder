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
            <Row styles={styles.compContainer} style={{backgroundColor: 'black'}}>
                <Col>
                    <Button variant='bg-none' onClick={onPreviousClick}>
                        <i className="fa-regular fa-circle-chevron-left pe-2"></i>
                        {previousBtnLabel}
                    </Button>
                </Col>
                <Col className={"d-flex align-items-center"}>
                    <p className={"mb-0"}>{text}</p>
                </Col>
            </Row>
        </>
    )
}