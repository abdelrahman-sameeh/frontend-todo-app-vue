import { baseURL } from "@/axios/baseURL"
import { notify } from "@kyvg/vue3-notification";

export const authActions = {

   register: async ({ commit, state }, data) => {
      
 
         await baseURL.post('/signup', data)
            .then((res) => {
               if (res.data.error) {

                  commit('setError', res.data.error)

                  notify({
                     type: 'error',
                     title: "Failed",
                     text: res.data.error,
                  });
               } else {
                  notify({
                     type: 'success',
                     title: "Success",
                     text: 'register successfully'
                  });
               }
            })
            .catch(err => {
               notify({
                  type: 'error',
                  title: "Failed",
                  text: 'something went wrong',
               });
            })
   },

   login: async function ({ commit, state }, data) {

      try {
         const res = await baseURL.post('/login', data)
         commit('login', res.data)

      } catch (err) {
         console.log(err);
      }

   },

   setToken: ({ state }) => {
      state.token = window.localStorage.getItem('token')
      state.username = window.localStorage.getItem('username')
   },

   clearErrorFromState : ({commit, state}) => {
      setTimeout(() => {
         commit('clearErrorFromState')
      }, 1000);
   }

}