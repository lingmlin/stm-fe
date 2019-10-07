import React from 'react';

import {Button, Container,Row,Col} from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

import './index.scss';

import Logo from '~src/containers/queuing/logo';

import { Redirect} from 'react-router-dom';

import QrReader from 'react-qr-reader';
import acc from './acc.png';
import invest from './invest.png';
import cmb from './cmb.png';
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
          <div className="header">Please select service or scan QR code</div>
        </Col>
      </Row>
      <Row className="justify-content-md-center">
        <Col md="auto">
          <NavLink
                      to="/idcard"
                    >
                      <img src={acc}/>
                    </NavLink>
                    
                  
          
        </Col>
        <Col md="auto">
          <img src={invest}/>
        </Col>
        <Col md="auto">
          <img src={cmb}/>
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
        <Redirect to="/queue/indication"/>
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
