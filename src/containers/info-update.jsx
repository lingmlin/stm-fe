

import React, { Component } from 'react';
import InfoUpdateComponent from '~src/components/info-update/info';
import bindAll from 'lodash.bindall';
import sendRequest from '~src/requests/index';

class InfoUpdate extends Component {
  constructor() {
    super();

    this.state = {
        validated : false,
        submitted: false

      }
    bindAll(this, ['handleSubmit']);
    
    

    
  }

  handleSubmit (event) {
    const form = event.currentTarget;
    
    event.preventDefault();
      event.stopPropagation();
    // else{
      this.setState({
        validated:true
      });  
    // }

    if (form.checkValidity()) {
      this.setState({
        submitted:true
      });
    }

    

  }


  componentWillMount() {
    
    //document.title = 'STM';
  }

  render() {
    return (
      <InfoUpdateComponent
        state={this.state}
        handleSubmit={this.handleSubmit}
      />
    );
  }
}

export default InfoUpdate;
