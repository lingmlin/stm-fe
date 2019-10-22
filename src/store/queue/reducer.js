
const initState = {
  destination:'',
  transaction:'',
  destType:-1//2=STM
};

/**
 * 
 * */

export const queue = (state = initState, action) => {
  if (action.type === 'QUEUE' ) {
    //console.log('userForm',action.first_name);
    return {
      ...state,
      destination:action.destination,
      transaction:action.transaction,
      destType:action.destType
    };
  }

  
  return state;
};
