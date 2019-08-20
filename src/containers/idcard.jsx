

import React, { Component } from 'react';
import IdComponent from '~src/components/idcard/idcard';
import bindAll from 'lodash.bindall';
import sendRequest from '~src/requests/index';

class IdCard extends Component {
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
      <IdComponent
        state={this.state}
      />
    );
  }
}

export default IdCard;
