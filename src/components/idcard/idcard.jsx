import React from 'react';

import {Button,Container,Row,Col} from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

import PropTypes from 'prop-types';

import './idcard.scss';
import idIcon from './id.png';
import banklogo from '../../banklogo.png';




const IndexComponent = props => {
  const { state } = props;



  return (
    <Container>
    <img src={banklogo} className="logo"></img>
      <Row className="justify-content-md-center">
        <Col>
          <div className="header">Please insert your ID card</div>
        </Col>
      </Row>
      <Row className="justify-content-md-center">
        <Col md="auto">
          <NavLink to="/facial">
            <img src={idIcon} className="idIcon"></img>
          </NavLink>
          
        </Col>
      </Row>
      
    </Container>

  );
};

IndexComponent.propTypes = {
  state: PropTypes.object,

};

export default IndexComponent;
