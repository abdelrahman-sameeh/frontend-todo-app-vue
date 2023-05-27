export const authGetters = {
   getToken : (state) => {
      return state.token
   },
   getUsername : (state) => {
      if(state.userInfo) return state.username
      else return 'unknown'
   },
   getError : (state) => {
      return state.error
   },
}