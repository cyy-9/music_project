export const changeLoginStatus = (value) => {
  return {
    type: "LoginStatus",
    value: value,
  }
}

export const changeUserId = (value) => {
  return {
    type: "ChangeUserId",
    value: value,
  }
}

export const ChangeUserAvatar = (value) => {
  return {
    type: "ChangeUserAvatar",
    value: value,
  }
}