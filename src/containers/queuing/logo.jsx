

import React, { Component } from 'react';
import LogoComponent from '~src/components/queuing/logo/logo';
import bindAll from 'lodash.bindall';
import sendRequest from '~src/requests/index';

class Logo extends Component {
  constructor() {
    super();

    this.state = {
       
      }
    bindAll(this, ['handleSubmit']);
    
    

    
  }

  handleSubmit (event) {

  }


  componentWillMount() {
    
    //document.title = 'STM';
  }

  render() {
    return (
      <LogoComponent
        state={this.state}
      />
    );
  }
}

export default Logo;
