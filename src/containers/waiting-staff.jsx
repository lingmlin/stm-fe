

import React, { Component } from 'react';
import WaitingStaffComponent from '~src/components/waiting-staff/waiting-staff';
import bindAll from 'lodash.bindall';
import envconfig from '~src/envconfig/envconfig';
const URL = envconfig.baseURL;


class WaitingStaff extends Component {
  constructor() {
    super();

    this.state = {
      complete:false
     
      }
    

    bindAll(this, ['abc']);
  }

 abc(){}

  componentDidMount() {
    let that = this;
    //document.title = 'STM';
    // setTimeout(()=>{
    //   that.setState({
    //     complete:true
    //   });
    // },5000);
    let ws = new WebSocket('ws://'+URL+'/stm/websocket/DPS007');
    ws.onopen=function(){
      console.log('open ws');
    }
    ws.onmessage=function(evt){
      console.log('rcv msg:',evt.data);
      let data = JSON.parse(evt.data);
      if(data.status == 1){
        that.setState({
          complete:true
        });
      }
    }
    ws.onclose=function(){
     console.log('open closed'); 
    }


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
