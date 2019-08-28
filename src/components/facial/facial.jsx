import React from 'react';

import {Button, Container,Row,Col} from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

import './facial.scss';
import Camera from 'react-camera';
import banklogo from '../../banklogo.png';
import Logo from '~src/containers/logo';

import { Redirect} from 'react-router-dom';


const FacialComponent = props => {
  const { 
    state,
    capture

   } = props;



  return (
    <Container>
      <Logo/>
      <Row className="justify-content-md-center">
        <Col>
          <div className="header">Please look into the camera</div>
        </Col>
      </Row>
      <Row className="justify-content-md-center">
        <Col md="auto">
          <div className="container">
                  <Camera
                    className="preview"
                    
                  >
                    <div className="captureContainer" >
                      <div className="captureButton" />
                    </div>
                  </Camera>
                  <img
                    className="captureImage"
                    
                  />
          </div>
          
        </Col>
        
      </Row>
      <Row className="justify-content-md-center">
        <Col md="auto">
          
            <Button variant="danger" size="lg" onClick={capture}>Capture</Button> 
          
        </Col>
      </Row>
      {state.complete &&
        <Redirect to="/scan-result"/>
      }
    </Container>
  );
};

FacialComponent.propTypes = {
  state: PropTypes.object,
  capture: PropTypes.func

};

export default FacialComponent;
