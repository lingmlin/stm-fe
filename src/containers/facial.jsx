

import React, { Component } from 'react';
import FacialComponent from '~src/components/facial/facial';
import bindAll from 'lodash.bindall';
import sendRequest from '~src/requests/index';
import axios from 'axios';

class Facial extends Component {
  constructor() {
    super();

    this.state = {
     
      }
    

    bindAll(this, ['capture']);
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

  componentWillMount() {
    
    
  }

  render() {
    return (
      <FacialComponent
        state={this.state}
        capture ={this.capture}
      />
    );
  }
}

export default Facial;
