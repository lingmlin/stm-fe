import React from 'react';

import {Button,Container,Row,Col} from 'react-bootstrap';
import { NavLink,Redirect } from 'react-router-dom';

import Logo from '~src/containers/print/logo';

import PropTypes from 'prop-types';

import './style.scss';
import waiting from './waiting.gif';





const PrintingComponent = props => {
  const { state
    
   } = props;



  return (
    <Container>
    <Logo></Logo>
      <Row className="justify-content-md-center">
        <Col>
          <div className="header">Your account history is being printed...</div>
        </Col>
      </Row>
      <br/><br/>
      <Row className="justify-content-md-center">
        <Col md="auto">
          
            <img src={waiting} className="waiting"></img>
        
          
        </Col>
      </Row>

      {state.complete &&
    
        <Redirect to="/print/complete"/>
      }
      
    </Container>

  );
};

PrintingComponent.propTypes = {
  state: PropTypes.object,
  transaction: PropTypes.number,

};

export default PrintingComponent;
