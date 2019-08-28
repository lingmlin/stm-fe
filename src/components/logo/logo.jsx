import React from 'react';

import {Button,Container,Row,Col} from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

import PropTypes from 'prop-types';

import './logo.scss';

import banklogo from '../../banklogo.png';




const LogoComponent = props => {
  const { state } = props;



  return (   
    <NavLink to="/"> 
      <img src={banklogo} className="logo"></img>    
    </NavLink>
  );
};

LogoComponent.propTypes = {
  state: PropTypes.object,

};

export default LogoComponent;
