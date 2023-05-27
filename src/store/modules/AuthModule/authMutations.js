import { notify } from "@kyvg/vue3-notification"

export const authMutations = {

   setError: (state, error) => {
      state.error = error
   },

   login: (state, data) => {
      if (!data.error) {
         window.localStorage.setItem('token', data.token)
         window.localStorage.setItem('username', data.user.username)
         state.token = data.token
         state.username = data.user.username
      } else {
         // handle error
         state.error = data.error
         // console.log(data.error);
         notify({
            text: data.error,
            speed: 500,
            duration: 500,
            title: 'Failed to login',
            type: 'error',
            ignoreDuplicates: true
         })

      }
   },

   clearErrorFromState: (state) => {
      return state.error = null
   },

}