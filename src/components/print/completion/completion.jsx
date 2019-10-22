import React from 'react';

import {Button,Container,Row,Col} from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

import Logo from '~src/containers/print/logo';

import PropTypes from 'prop-types';

import './style.scss';
import good from './good.png';
import bad from './bad.png';
import neutral from './neutral.png';
import thank from './thank.png';


import { Redirect} from 'react-router-dom';




const CompletionComponent = props => {
  const { state,
    clickGood,clickBad,clickNeutral
   } = props;



  return (
    <Container>
    <Logo></Logo>
      {(!state.submitted) &&
          <Row className="justify-content-md-center">
            <Col>
              <div className="header"> <span className="blink">Please take the printout of your document</span><br/><br/>Do you like our Smart Teller Machine?</div>
            </Col>
          </Row>
      }
      {(!state.submitted) &&
          <Row className="justify-content-md-center">
            
              <Col md="auto">
                <img src={good} onClick={clickGood}/>
              </Col>
              <Col md="auto" >
                <img src={neutral} onClick={clickNeutral}/>
              </Col>
              <Col md="auto">
                <img src={bad} onClick={clickBad}/>
              </Col>
          </Row>
      }
      {state.submitted &&
        
          <Row className="justify-content-md-center">
                      <Col>
                        <div className="header">Thank you for using our machine. <br/>Have a nice day!</div>
                      </Col>
          </Row>
         
         
      }
      {state.submitted &&
       <Row className="justify-content-md-center">
                      <Col md="auto">
                                      <img src={thank}/>
                                    </Col>
          </Row>
      }
      {state.complete &&
        <Redirect to="/print/index"/>
      }      
      
    </Container>

  );
};

CompletionComponent.propTypes = {
  state: PropTypes.object,
  clickGood: PropTypes.func,
  clickBad: PropTypes.func,
  clickNeutral: PropTypes.func

};

export default CompletionComponent;
