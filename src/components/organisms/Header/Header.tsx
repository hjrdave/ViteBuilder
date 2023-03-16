import React from 'react';
import { Navbar, Container, Row, Col } from 'react-bootstrap';
import { IWidgetMap } from '../../../widget-map';
import NavItem from '../../molecules/NavItem';

interface Props{
    widgets: IWidgetMap[]
}
export default function Header({widgets}: Props) {

    const buildWidgetList = widgets.map((widget) => ( { text: widget.name, path: widget.route }));

    return (
        <>
            <Navbar variant="dark" className={`sticky-top`} style={{backgroundColor: "#20232a"}}>
                <Container fluid>
                    <Row>
                        <Col className={'d-flex justify-content-end align-items-center'}>
                            <Navbar.Brand className={"d-flex align-items-center"}>
                                <i className="fa-brands fa-react pe-2 fs-3" style={{color: "#61dafb"}}></i>
                                React Builder
                            </Navbar.Brand>
                            <div className={'d-flex ps-3'}>
                                <NavItem
                                    text={'Home'}
                                    path={'/'}
                                    className={'text-white pe-4'}
                                    icon={<i className="fa-solid fa-house pe-2"></i>}
                                />
                                <NavItem
                                    text={'Widgets'}
                                    className={'pe-4 text-white'}
                                    icon={<i className="fa-solid fa-cubes pe-2"></i>}
                                    subItems={buildWidgetList}
                                />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </Navbar>
        </>
    )
}