function setSession(user) {
  return {
    type: 'SET_SESSION',
    payload: user
  }
}
export default setSession