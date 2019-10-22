import React from 'react';

import {Button, Container,Row,Col} from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

import './index.scss';

import Logo from '~src/containers/print/logo';

import { Redirect} from 'react-router-dom';

import QrReader from 'react-qr-reader';
import app from './openapp.png';
import scan from './scanqr.png';
import print from './print.png';

import scannedSound from './alarm.mp3';



const IndexComponent = props => {
  const { 
    state,
    capture,
    handleScan,
    handleError,
    alarmEnd

   } = props;



  return (
    <Container>
      <Logo/>
      <Row className="justify-content-md-center">
        <Col>
          <div className="header">Welcome to Smart Teller Machine</div>
        </Col>
      </Row>
      <Row className="justify-content-md-center">
       
        <Col md="auto">
          <img src={app}/>
        </Col>
        <Col md="auto">
          <img src={scan}/>
        </Col>
        <Col md="auto">
          <img src={print}/>
        </Col>

        
      </Row>
      <br/>
      <Row className="justify-content-md-center">
        <Col md="auto">
          <div className="container">
              <QrReader
              delay={300}
              onError={handleError}
              onScan={handleScan}
              style={{ width: '300px' }}
              />
       
          </div>
          
        </Col>
        
      </Row>

      {state.scanned &&
        <audio autoPlay onEnded={alarmEnd}>
        <source src={scannedSound} type={"audio/mp3"}  />        
      Your browser does not support this audio format.
      </audio>

      }
 
      {state.complete &&
        <Redirect to="/print/printing"/>
      }
    </Container>
  );
};

IndexComponent.propTypes = {
  state: PropTypes.object,
  capture: PropTypes.func,
  handleError:PropTypes.func,
  handleScan:PropTypes.func,
  alarmEnd:PropTypes.func

};

export default IndexComponent;
