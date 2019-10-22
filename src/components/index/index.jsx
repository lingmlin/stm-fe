import React from 'react';

import {Button, Container,Row,Col} from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

import PropTypes from 'prop-types';
import './swiper.scss';
import './index.scss';

import banklogo from '../../banklogo.png';
import id from './id-pre.png';
import mainmenu from './selectserv.png';
import { Redirect} from 'react-router-dom';



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
                      <img src={id}/>         
        </Col>     
        <NavLink
                      to="/mainmenu"
                    >
                      <img src={mainmenu}/>
                    </NavLink>
      </Row>
<br/>

      }
      {state.complete &&
        <Redirect to="/facial"/>
      }
      
    </Container>



  );
};

IndexComponent.propTypes = {
  state: PropTypes.object,
  showModal: PropTypes.func,
  hideModal: PropTypes.func
};

export default IndexComponent;
