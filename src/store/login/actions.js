/*
 * 打卡对话框
 * @Author: Jiajun Yan 
 * @Date: 2018-10-24 14:44:03 
 * @Last Modified by: Jiajun Yan
 * @Last Modified time: 2018-10-27 15:30:50
 */

// （唤起登录框）用户未登录
export const openModal = { type: 'OPEN_MODAL', isLoggedIn: false };

// （关闭登录框）用户已登录
export const closeModal = { type: 'CLOSE_MODAL', isLoggedIn: true };

// 保存用户信息
export const saveCurrentUser = { type: 'SAVE_CURRENT_USER' };
