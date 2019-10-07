import React from 'react';

import {Button,Container,Row,Col} from 'react-bootstrap';
import { NavLink,Redirect } from 'react-router-dom';

import Logo from '~src/containers/logo';

import PropTypes from 'prop-types';

import './scan-result.scss';
import waiting from './waiting.gif';





const ScanResultComponent = props => {
  const { state,
    transaction
   } = props;



  return (
    <Container>
    <Logo></Logo>
      <Row className="justify-content-md-center">
        <Col>
          <div className="header">Verifying your identity, please wait.</div>
        </Col>
      </Row>
      <Row className="justify-content-md-center">
        <Col md="auto">
          
            <img src={waiting} className="waiting"></img>
        
          
        </Col>
      </Row>

      {state.complete &&
        transaction === 1 &&      
        <Redirect to="/account-history"/>
      }
      
    </Container>

  );
};

ScanResultComponent.propTypes = {
  state: PropTypes.object,
  transaction: PropTypes.number,

};

export default ScanResultComponent;
