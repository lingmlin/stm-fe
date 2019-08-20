

import React, { Component } from 'react';
import InfoUpdateComponent from '~src/components/info-update/info';
import bindAll from 'lodash.bindall';
import sendRequest from '~src/requests/index';

class InfoUpdate extends Component {
  constructor() {
    super();

    this.state = {
        validated : false
      }
    bindAll(this, ['handleSubmit']);
    
    

    
  }

  handleSubmit (event) {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    this.setState({
      validated:true
    });
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
