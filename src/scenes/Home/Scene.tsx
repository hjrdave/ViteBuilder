import React from "react";
import {Row, Col} from 'react-bootstrap';

export default function Scene() {


  return(
    <>
      <Row>
        <Col className={"d-flex justify-content-center align-items-center"} style={{height: "75vh"}}>
          <div className={"d-flex align-items-center"}>
              <i className="fa-solid fa-trowel-bricks text-muted" style={{fontSize: "8rem"}}></i>
              <i className="fa-brands fa-react text-muted px-4" style={{fontSize: "15rem"}}></i>
              <i className="fa-solid fa-hammer text-muted" style={{fontSize: "8rem"}}></i>
          </div>
        </Col>
      </Row>
    </>
  );
}
