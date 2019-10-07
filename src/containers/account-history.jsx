

import React, { Component } from 'react';
import AccHisotryComponent from '~src/components/account-history/history';
import bindAll from 'lodash.bindall';
import sendRequest from '~src/requests/index';

class AccountHistory extends Component {
  constructor() {
    super();

    this.state = {
     complete:false
      }
    

    bindAll(this, ['print']);
  }

  print(){
    this.setState({
        complete:true
      });
    
  }



  componentDidMount() {
    
    
    //document.title = 'STM';
  }

  render() {
    return (
      <AccHisotryComponent
        state={this.state}
        print={this.print}
      />
    );
  }
}

export default AccountHistory;
