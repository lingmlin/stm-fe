

import React, { Component } from 'react';
import QrCodeComponent from '~src/components/qrcode/qrcode';
import bindAll from 'lodash.bindall';
import sendRequest from '~src/requests/index';
import axios from 'axios';




class QrCode extends Component {
  constructor() {
    super();

    this.state = {
        result:'waiting'
     
      }
    

    bindAll(this, [
        'capture',
        'handleError',
        'handleScan'
    ]);
  }
  handleScan = data => {
    if (data) {
      this.setState({
        result: data
      })
    }
  }
  handleError = err => {
    console.error(err)
  }

 capture(){
  console.log('as');
  axios({
    url: `http://39.108.142.194:8080/stm/getCustomerInfo`,
    method: 'post'  ,
    // config: { 
    //   headers: {'Content-Type': 'application/x-www-form-urlencoded' }
    // },
    data: {ID_no:111111111} 
  }).then(function (res){
    console.log('getinfo ok',res);


    

    
    
  }).catch(function(err){
    console.log('get err',err);

  });

 }

 componentDidMount(){


 }

  componentWillMount() {
    
    
  }

  render() {
    return (
      <QrCodeComponent
        state={this.state}
        capture ={this.capture}
        handleScan={this.handleScan}
        handleError={this.handleError}
      />
    );
  }
}

export default QrCode;
