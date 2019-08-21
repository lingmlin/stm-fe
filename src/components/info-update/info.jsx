import React from 'react';

import {Button, Form, InputGroup,Col,Container,Row} from 'react-bootstrap';
import { Redirect} from 'react-router-dom';

import PropTypes from 'prop-types';


import './info.scss';
import banklogo from '../../banklogo.png';
import Logo from '~src/containers/logo';


const InfoUpdateComponent = props => {
  const { state,handleSubmit } = props;



  return (

    <Container>

      <Logo/>
      
        
      
      <Row className="justify-content-md-center">
        <Col>
          <div className="header">Your personal information</div>
        </Col>
      </Row>
      <Row>
        <Form noValidate validated={state.validated} onSubmit={handleSubmit}>
              <Form.Row>
                <Form.Group as={Col} md="4" controlId="validationCustom01">
                  <Form.Label>First name</Form.Label>
                  <Form.Control
                    required
                    type="text"
                    placeholder="First name"
                    defaultValue="Dawen"
                  />
                  <Form.Control.Feedback type="invalid">Please provide a valid name.</Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} md="4" controlId="validationCustom02">
                  <Form.Label>Last name</Form.Label>
                  <Form.Control
                    required
                    type="text"
                    placeholder="Last name"
                    defaultValue="Chen"
                  />
                  <Form.Control.Feedback type="invalid">Please provide a valid name.</Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} md="4" controlId="validationCustomUsername">
                  <Form.Label>ID no.</Form.Label>
                  
                    
                    <Form.Control
                      type="text"
                      placeholder="ID no."                      
                      required   
                      defaultValue="1234567890"                   
                    />
                    <Form.Control.Feedback type="invalid">Please provide a ID no.</Form.Control.Feedback>
              
                </Form.Group>
              </Form.Row>
              <Form.Row>
                <Form.Group as={Col} md="10" controlId="validationCustom03">
                  <Form.Label>Address</Form.Label>
                  <Form.Control type="text" placeholder="Address" required defaultValue="Garden Hotel Guangzhou"/>
                  <Form.Control.Feedback type="invalid">
                    Please provide a valid address.
                  </Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} md="2" controlId="validationCustom04">
                  <Form.Label>Zip</Form.Label>
                  <Form.Control type="text" placeholder="Zip" required defaultValue="123456"/>
                  <Form.Control.Feedback type="invalid">
                    Please provide a valid zip.
                  </Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} md="6" controlId="validationCustom05">
                  <Form.Label>Mobile</Form.Label>
                  <Form.Control type="text" placeholder="Mobile" required defaultValue="1234567890"/>
                  <Form.Control.Feedback type="invalid">
                    Please provide a valid mobile number.
                  </Form.Control.Feedback>
                </Form.Group>
              </Form.Row>
              <Form.Group>
                <Form.Check
                  required
                  label="Agree to terms and conditions"
                  feedback="You must agree before submitting."
                />
              </Form.Group>
              <Button type="submit" variant="danger" size="lg">Submit</Button>
            </Form>
      </Row>

      {state.submitted &&
              <Redirect to="/waiting-staff"/>
            }

    </Container>
    	

  );
};



InfoUpdateComponent.propTypes = {
  state: PropTypes.object,
  handleSubmit:PropTypes.func

};

export default InfoUpdateComponent;
