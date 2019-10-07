

import React, { Component } from 'react';
import {connect} from 'react-redux';
import IndexComponent from '~src/components/queuing/index/index';
import bindAll from 'lodash.bindall';
import sendRequest from '~src/requests/index';
import axios from 'axios';

import store from '~src/store/store';

import * as queue from '~src/store/queue/actions';
import qrcodes from '~src/transactions/qrcodes';
import transaction from '~src/transactions/transaction';

var scanned = false;

class Index extends Component {
    constructor() {
      super();
  
      this.state = {
          result:'waiting',
          scanned:false
       
        }
      
  
      bindAll(this, [
         
          'handleError',
          'handleScan',
          'alarmEnd'
      ]);
    }
    handleScan = data => {
      if (!scanned && data) {//only allow qr scanning once 
        scanned = true;
        this.setState({
          //result: data,
          scanned: true
        });
        const action = queue.queue;
        // first_name:state.userForm.first_name,
        // last_name:state.userForm.last_name,
        // address: state.userForm.addChange,
        // id_no:state.userForm.id_no,
        // mobile_phone:state.userForm.mobile_phone,
        // zip:state.userForm.zip
        
        action.transaction = qrcodes[data];//this is from qr code
        action.destType = transaction[action.transaction].destType;//get the mapping
        //action.destination comes from host, below are for mock-up
        if(action.destType ===1){
          action.destination = "Jay";
        }else if(action.destType ===2){
          action.destination = 'STM No.02';//this is from host
        }
        
        store.dispatch(action);
        
      }
    }
    handleError = err => {
      console.error(err)
    }
    alarmEnd(){
      this.setState({
        complete: true
      });
    }
  
   
  
   componentDidMount(){
     scanned = false;
  
  
   }
  
    componentWillMount() {
      
      
    }
  
    render() {
      return (
        <IndexComponent
          state={this.state}
      
          handleScan={this.handleScan}
          handleError={this.handleError}
          alarmEnd ={this.alarmEnd}
        />
      );
    }
  }
  


export default Index;