/*
 * 用于判断登录状态
 * @Author: Jiajun Yan
 * @Date: 2018-10-23 17:15:42
 * @Last Modified by: Jiajun Yan
 * @Last Modified time: 2018-10-27 15:27:45
 */

const initState = {
  scrollBarIsHidden: false
};

/**
 * @todo 待优化，如果将 action type 的操作单独放到一个文件中，方便管理
 * */

export const scrollBarReducer = (state = initState, action) => {
  // 保存用户信息
  if (action.type === 'SHOW_SCROLL_BAR') {
    return {
      ...state,
      scrollBarIsHidden: action.scrollBarIsHidden
    };
  }

  // 保存用户信息
  if (action.type === 'HIDE_SCROLL_BAR') {
    return {
      ...state,
      scrollBarIsHidden: action.scrollBarIsHidden
    };
  }
  return state;
};
