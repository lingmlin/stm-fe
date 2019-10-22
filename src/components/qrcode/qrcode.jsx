import React from 'react';

import {Button, Container,Row,Col} from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

import './qrcode.scss';
import Camera from 'react-camera';
import banklogo from '../../banklogo.png';
import Logo from '~src/containers/logo';

import { Redirect} from 'react-router-dom';

import QrReader from 'react-qr-reader';



const QrCodeComponent = props => {
  const { 
    state,
    capture,
    handleScan,
    handleError

   } = props;



  return (
    <Container>
      <Logo/>
      <Row className="justify-content-md-center">
        <Col>
          <div className="header">Please scan QR code</div>
        </Col>
      </Row>
      <Row className="justify-content-md-center">
        <Col md="auto">
          <div className="container">
          <QrReader
          delay={300}
          onError={handleError}
          onScan={handleScan}
          style={{ width: '640px' }}
        />
        <p>{state.result}</p>
          </div>
          
        </Col>
        
      </Row>
 
      {state.complete &&
        <Redirect to="/info-update"/>
      }
    </Container>
  );
};

QrCodeComponent.propTypes = {
  state: PropTypes.object,
  capture: PropTypes.func,
  handleError:PropTypes.func,
  handleScan:PropTypes.func

};

export default QrCodeComponent;
