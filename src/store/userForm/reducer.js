
const initState = {
  first_name:'hh',
  last_name:'',
  address:'',
  mobile_phone:'',
  zip:'',
  id_no:''
};

/**
 * 
 * */

export const userForm = (state = initState, action) => {
  if (action.type === 'DOWNLOAD_FORM' ) {
    console.log('userForm',action.first_name);
    return {
      ...state,
      first_name:action.first_name,
      last_name:action.last_name,
      address:action.address,
      mobile_phone:action.mobile_phone,
      zip:action.zip,
      id_no:action.id_no
    };
  }

  
  return state;
};
