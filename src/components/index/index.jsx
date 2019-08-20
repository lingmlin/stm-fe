import React from 'react';

import {Button, Container,Row,Col} from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

import PropTypes from 'prop-types';
import './swiper.scss';
import './index.scss';

import banklogo from '../../banklogo.png';


const IndexComponent = props => {
  const { state, showModal, hideModal } = props;



  return (

    <Container>
      <img src={banklogo} className="logo"></img>
      <Row className="justify-content-md-center">
        <Col>
          <div className="header">Welcome to Smart Teller Machine</div>
        </Col>
      </Row>
      <Row className="justify-content-md-center">
        <Col md="auto">
          <NavLink
                      to="/idcard"
                    >
                      <Button variant="danger" size="lg">Information Update</Button> 
                    </NavLink>
                    
                  
          
        </Col>
        
      </Row>
<br/>
      <Row className="justify-content-md-center">
        <Col md="auto">
          <Button variant="danger" size="lg">Print Transaction History</Button>
        </Col>
      </Row>
      
    </Container>



  );
};

IndexComponent.propTypes = {
  state: PropTypes.object,
  showModal: PropTypes.func,
  hideModal: PropTypes.func
};

export default IndexComponent;
