

// 如果未登录，提示弹窗，否则不弹
const initState = {
  isLoggedIn: true, // 默认为 true，不弹窗
  currentUser: null
};

/**
 * @todo 待优化，如果将 action type 的操作单独放到一个文件中，方便管理
 * */

export const loginReducer = (state = initState, action) => {
  if (action.type === 'OPEN_MODAL' || action.type === 'CLOSE_MODAL') {
    return {
      ...state,
      isLoggedIn: action.isLoggedIn
    };
  }

  // 保存用户信息
  if (action.type === 'SAVE_CURRENT_USER') {
    return {
      ...state,
      currentUser: action.currentUser
    };
  }
  return state;
};
