const initState = {
  isLogin: false,
  userId: null,
  userAvatar: '',
}

export const loginReducer = (state = initState, action) => {
  switch(action.type) {
    case "LoginStatus":
      return {...state, isLogin: action.value};
    case "ChangeUserId":
      return {...state, userId: action.value};
    case "ChangeUserAvatar":
      return {...state, userAvatar: action.value};
    default: 
    return {...state};
  }
}