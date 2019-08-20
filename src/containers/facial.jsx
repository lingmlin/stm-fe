

import React, { Component } from 'react';
import FacialComponent from '~src/components/facial/facial';
import bindAll from 'lodash.bindall';
import sendRequest from '~src/requests/index';

class Facial extends Component {
  constructor() {
    super();

    this.state = {
     
      }
    

    bindAll(this, ['abc']);
  }

 abc(){}

  componentWillMount() {
    
    document.title = 'STM';
  }

  render() {
    return (
      <FacialComponent
        state={this.state}
      />
    );
  }
}

export default Facial;
