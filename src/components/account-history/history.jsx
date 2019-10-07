import React from 'react';

import {Button, Form, InputGroup,Col,Container,Row} from 'react-bootstrap';
import { Redirect} from 'react-router-dom';

import PropTypes from 'prop-types';


import './style.scss';
//import banklogo from '../../banklogo.png';
import Logo from '~src/containers/logo';
import history from './acc-his.png'; 


const AccHisotryComponent = props => {
  const { 
    state,
    print

     } = props;



  return (

    <Container>

      <Logo/>
      
        
      
      <Row className="justify-content-md-center">
        <Col>
          <div className="header">Please review your transaction history <br/>before printing</div>
        </Col>
      </Row>

      <Row className="justify-content-md-center">
        <Col md="auto">
          
                      <img src={history}/>                  
          
        </Col>     
        
        
      </Row>
      <Row className="justify-content-md-center">
      <Col md="auto">
          
          <Button variant="danger" size="lg" onClick={print}>Print</Button> 
        
      </Col>
      </Row>

      {state.complete &&
              <Redirect to="/print-complete"/>
            }

    </Container>
    	

  );
};



AccHisotryComponent.propTypes = {
  state: PropTypes.object,
  print:PropTypes.func,
  
};

export default AccHisotryComponent;
