import React from 'react';

import {Button, Container,Row,Col} from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

import PropTypes from 'prop-types';
import './swiper.scss';
import './index.scss';

import banklogo from '../../banklogo.png';
import print from './print.JPG';
import info from './info.jpg';
import card from './card.jpg';


const IndexComponent = props => {
  const { state, showModal, hideModal } = props;



  return (

    <Container>
      <img src={banklogo} className="logo"></img>
      <Row className="justify-content-md-center">
        <Col>
          <div className="header">Welcome to Smart Teller Machine<br/>Please select service</div>
        </Col>
      </Row>
      <Row className="justify-content-md-center">
        <Col md="auto">
          <NavLink
                      to="/idcard"
                    >
                      <img src={info}/>
                    </NavLink>
                    
                  
          
        </Col>
        <Col md="auto">
          <img src={print}/>
        </Col>
        <Col md="auto">
          <img src={card}/>
        </Col>
        
      </Row>
<br/>
      <Row className="justify-content-md-center">
        
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
