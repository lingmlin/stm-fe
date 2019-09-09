

import React, { Component } from 'react';
import {connect} from 'react-redux';
import InfoUpdateComponent from '~src/components/info-update/info';
import bindAll from 'lodash.bindall';
import envconfig from '~src/envconfig/envconfig';
const URL = envconfig.baseURL;
const fetch = require('node-fetch');

class InfoUpdate extends Component {
  constructor() {
    super();
console.log('constructor',this);

    this.state = {
        validated : false,
        submitted: false,
        firstName:'',
        lastName:'',
        id:'',
        add:'',
        zip:'',
        mobile:''

      }

    bindAll(this, [
      'handleSubmit',
      'firstNameChange',
      'lastNameChange',
      'idChange',
      'addChange',
      'zipChange',
      'mobileChange'
      ]);
    
    

    
  }

  

  firstNameChange(evt){
  //console.log('name:',evt.target.value);
    this.setState({
      firstName:evt.target.value
    });
  }
  lastNameChange(evt){
  //console.log('name:',evt.target.value);
    this.setState({
      lastName:evt.target.value
    });
  }
  idChange(evt){
  //console.log('name:',evt.target.value);
    this.setState({
      id:evt.target.value
    });
  }
  addChange(evt){
  //console.log('name:',evt.target.value);
    this.setState({
      add:evt.target.value
    });
  }
  zipChange(evt){
  //console.log('name:',evt.target.value);
    this.setState({
      zip:evt.target.value
    });
  }
  mobileChange(evt){
  //console.log('name:',evt.target.value);
    this.setState({
      mobile:evt.target.value
    });
  }

  handleSubmit (event) {
    let that = this;
    const form = event.currentTarget;
    
    event.preventDefault();
      event.stopPropagation();
    // else{
      this.setState({
        validated:true
      });  
    // }

    if (form.checkValidity()) {
      

      let url =  `http://${URL}/stm/submitOrder`;

      let data={
        first_name:this.state.firstName,
        last_name:this.state.lastName,
        address:this.state.add,
        mobile_phone:this.state.mobile,
        zip:parseInt(this.state.zip),
        id_no:parseInt(this.state.id)


      };

      fetch(url,{
        method:"POST",
        body:JSON.stringify(data),
        headers:{
        'Content-Type':'application/json'
        }

      }).then(res => res.json())
      .then(response =>
      {
        console.log('succ',response);
        that.setState({
          submitted:true
        });

      }
      )
      .catch(error => console.error('error:',error))

    }

    

  }



  componentWillMount() {

    if(this.props){
      this.setState({
        firstName:this.props.first_name,
        lastName:this.props.last_name,
        id:this.props.id_no,
        add:this.props.address,
        zip:this.props.zip,
        mobile:this.props.mobile_phone
      })
    }
    
    //document.title = 'STM';
  }



  render() {
    return (
      <InfoUpdateComponent
        state={this.state}
        firstNameChange={this.firstNameChange}
        lastNameChange={this.lastNameChange}
        idChange={this.idChange}
        addChange={this.addChange}
        zipChange={this.zipChange}
        mobileChange={this.mobileChange}



        handleSubmit={this.handleSubmit}

      />
    );
  }
}
const mapStateToProps = state =>{
    console.log('map',state.userForm.first_name);
    console.log('map',state.userForm.last_name);
    return {
      first_name:state.userForm.first_name,
      last_name:state.userForm.last_name,
      address: state.userForm.address,
      id_no:state.userForm.id_no,
      mobile_phone:state.userForm.mobile_phone,
      zip:state.userForm.zip
    }
  };

export default connect(mapStateToProps)(InfoUpdate);
