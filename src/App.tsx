import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/organisms/Header';
import Routes from './Routes';
import widgetMap from './route-map';
import './App.scss';

function App() {
  return (
    <div className='App'>
      <Router basename='/'>
        <Header widgets={widgetMap} />
        <div className={'d-flex'}>
          <div style={{ minHeight: 'calc(100vh - 60px)' }}></div>
          <div className={'d-flex flex-column justify-content-between'} style={{ width: '100%' }}>
            <Container fluid className={'p-3'}>
              <Row>
                <Col>
                  <Routes />
                </Col>
              </Row>
            </Container>
            <div className={'d-flex justify-content-center p-1'}>
              <small style={{ fontSize: '.75rem' }}>Copyright 2023 React Builder</small>
            </div>
          </div>
        </div>
      </Router>
    </div>
  );
}

export default App;
