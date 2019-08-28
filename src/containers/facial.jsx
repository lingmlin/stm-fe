

import React, { Component } from 'react';
import FacialComponent from '~src/components/facial/facial';
import bindAll from 'lodash.bindall';

import envconfig from '~src/envconfig/envconfig';
const URL = envconfig.baseURL;

const fetch = require('node-fetch');

class Facial extends Component {
  constructor() {
    super();

    this.state = {
     
      }
    

    bindAll(this, ['capture','encodeFormData']);
  }

  encodeFormData(data) {
　　if (!data) return "";         // Always return a string
　　var pairs = [];             // To hold name=value pairs
　　for(var name in data) {     // For each name
　　　　if (!data.hasOwnProperty(name))  continue;            // Skip inherited
　　　　if (typeof data[name] === "function")  continue;         // Skip methods
　　　　var value = data[name].toString();                     // Value as string
　　　　name = encodeURIComponent(name.replace(" ", "+"));   // Encode name
　　　　value = encodeURIComponent(value.replace(" ", "+"));   // Encode value
　　　　pairs.push(name + "=" + value);                      // Remember name=value pair
　　}
　　return pairs.join('&');                 // Return joined pairs separated with &
}

 capture(){
  let that = this;
  console.log('as');



  let url =  `http://${URL}/stm/getCustomerInfo`;

  let abc={id_no:111111111};

  fetch(url,{
    method:"POST",
    body:JSON.stringify(abc),
    headers:{
    'Content-Type':'application/json'
    }

  }).then(res => res.json())
  .then(response =>
  {
    console.log('succ',response);
    
      that.setState({
        complete: true
      })
    
    

  }
  )
  .catch(error => console.error('error:',error))

/*

  let http = new XMLHttpRequest();
  let formData = new FormData();
  formData.append("ID_no",111111111);
  
  http.open('POST',url,true);

  http.setRequestHeader('Content-Type', 'application/json');
  http.onload=function(e){
    if(this.status == 200){
      console.log(this);
    }
  }
  http.send(this.encodeFormData(formData));
*/


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
