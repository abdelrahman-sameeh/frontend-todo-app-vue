import { baseURL } from "@/axios/baseURL"
import { notify } from "@kyvg/vue3-notification";

export const actions = {


   async getAllTodos({ commit, state, rootState }) {
      try {
         const token = rootState.authModule.token
         const response = await baseURL.get('/api/v1/allTodos', {headers: {Authorization: `Bearer ${token}`}});
         const todos = response.data;
         commit('getAllTodos', todos);
      } catch (error) {
         console.error('Error fetching todos:', error);
      }
   },


   addTodo: async ({ commit, state, rootState }, data) => {
      const token = rootState.authModule.token
      await baseURL.post('/api/v1/addTodo', data, {headers: {Authorization: `Bearer ${token}`}})
         .then(res => {
            notify({
               type: 'success',
               title: "Success",
               text: res.data.msg,
            });

         })
         .catch(err=>{
            notify({
               type: 'error',
               title: "Failed",
               text: 'something went wrong',
            });
         })
   },

   deleteAllTodos: async ({ commit, state, rootState }) => {
      const token = rootState.authModule.token
      await baseURL.delete('/api/v1/deleteAllTodos', {headers: {Authorization: `Bearer ${token}`}})
         .then(res => {

            notify({
               type: 'success',
               title: "Success",
               text: res.data.msg,
            });

         })
         .catch(err=>{
            notify({
               type: 'error',
               title: "Failed",
               text: 'something went wrong',
            });
         })

      commit('deleteAllTodos')
   },

   deleteTodo: async ({ commit, state, rootState }, id) => {
      const token = rootState.authModule.token
      await baseURL.delete(`/api/v1/deleteTodo?todoId=${id}`, {headers: {Authorization: `Bearer ${token}`}})
         .then(res => {

            notify({
               type: 'success',
               title: "Success",
               text: res.data.msg,
            });

         })
         .catch(err=>{
            notify({
               type: 'error',
               title: "Failed",
               text: 'something went wrong',
            });
         })

      commit('deleteTodo', id)
   },

   getTodoById({ commit, state }, _id) {
      const todo = state.todos.filter(todo => todo._id == _id)[0]
      commit('getTodoById', todo)
   },

   modifyTodo: async ({ commit, state, rootState }, data) => {
      
      const token = rootState.authModule.token
      await baseURL.put('/api/v1/updateTodo', data, {headers: {Authorization: `Bearer ${token}`}})
         .then(res => {

            notify({
               type: 'success',
               title: "Success",
               text: res.data.msg,
            });

         })
         .catch(err=>{
            notify({
               type: 'error',
               title: "Failed",
               text: 'something went wrong',
            });
         })

      const res = await baseURL.get('/api/v1/allTodos', {headers: {Authorization: `Bearer ${token}`}})
      commit('modifyTodo', res)
   },


}