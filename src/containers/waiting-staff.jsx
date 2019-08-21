

import React, { Component } from 'react';
import WaitingStaffComponent from '~src/components/waiting-staff/waiting-staff';
import bindAll from 'lodash.bindall';
import sendRequest from '~src/requests/index';


class WaitingStaff extends Component {
  constructor() {
    super();

    this.state = {
      complete:false
     
      }
    

    bindAll(this, ['abc']);
  }

 abc(){}

  componentWillMount() {
    let that = this;
    //document.title = 'STM';
    setTimeout(()=>{
      that.setState({
        complete:true
      });
    },5000);
  }

  render() {
    return (
      <WaitingStaffComponent
        state={this.state}
      />
    );
  }
}

export default WaitingStaff;
