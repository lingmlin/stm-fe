import React from 'react';

import {Button, Container,Row,Col} from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

import './facial.scss';
import Camera from 'react-camera';
import banklogo from '../../banklogo.png';



const FacialComponent = props => {
  const { state } = props;



  return (
    <Container>
    <img src={banklogo} className="logo"></img>
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
          <NavLink
            to="/info-update"
          >
            <Button variant="danger" size="lg">Capture</Button> 
          </NavLink>
        </Col>
      </Row>
      
    </Container>
  );
};

FacialComponent.propTypes = {
  state: PropTypes.object,

};

export default FacialComponent;
