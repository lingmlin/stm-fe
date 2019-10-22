import React from 'react';

import {Button, Container,Row,Col} from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

import './style.scss';

import Logo from '~src/containers/queuing/logo';

import { Redirect} from 'react-router-dom';

import stm from './stm.svg';
import staff from './waitstaff.svg';





const IndicationComponent = props => {
  const { 
    state,
    destination,
    transaction,
    destType


   } = props;



  return (
    <Container>
      <Logo/>
      {destType === 1 && //1 means wait staff
        <div>
        <Row className="justify-content-md-center">
          <Col>
            <div className="header">Please wait...<br/> 
            Our staff <span className={"blink"}>{destination}</span> will come to assist you on<br/>
            {transaction}
            </div>
          </Col>
        </Row>
        <Row className="justify-content-md-center">
          
          <Col md="auto">        
            <embed src={staff} width={"480"} height={"600"} type={"image/svg+xml"} />        
          </Col>        
        </Row>
        </div>
      }
      {destType === 2 && //2 means STM
        <div>
        <Row className="justify-content-md-center">
          <Col>
            <div className="header">Please go to <span className={"blink"}>{destination}</span> to complete <br/>
            {transaction}
            </div>
          </Col>
        </Row>
        <Row className="justify-content-md-center">
          
          <Col md="auto">        
            <embed src={stm} width={"480"} height={"600"} type={"image/svg+xml"} />        
          </Col>        
        </Row>
        </div>
      }


      <br/>
      
 
      {state.complete &&
        <Redirect to="/info-update"/>
      }
    </Container>
  );
};

IndicationComponent.propTypes = {
  state: PropTypes.object,
  transaction: PropTypes.string,
  destination: PropTypes.string,
  destType:PropTypes.number

};

export default IndicationComponent;
