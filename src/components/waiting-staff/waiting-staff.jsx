import React from 'react';

import {Button,Container,Row,Col} from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

import Logo from '~src/containers/logo';

import PropTypes from 'prop-types';

import './waiting-staff.scss';

import ad from './ad.jpg';
import { Redirect} from 'react-router-dom';




const WaitingStaffComponent = props => {
  const { state } = props;



  return (
    <Container>
    <Logo></Logo>
      <Row className="justify-content-md-center">
        <Col lg="auto">
          <div className="header">Our staff is processing your request, please wait.<br/>Below is our latest promotion for you:
          </div>
        </Col>
      </Row>
      <Row className="justify-content-md-center">
        <Col md="auto">
          <img src={ad} className="ad"/>
        </Col>
      </Row>

      {state.complete &&
        <Redirect to="/completion"/>
      }
      
      
    </Container>

  );
};

WaitingStaffComponent.propTypes = {
  state: PropTypes.object,

};

export default WaitingStaffComponent;
