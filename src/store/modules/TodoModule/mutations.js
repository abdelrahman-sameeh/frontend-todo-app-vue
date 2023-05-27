
export const mutations = {
   getAllTodos(state, todos) {
      state.todos = todos.todos || [] ;
   },

   deleteAllTodos(state) {
      state.todos = [];
   },

   deleteTodo(state, _id) {
      state.todos = state.todos.filter(todo=> todo._id != _id)
   },

   getTodoById(state, data) {
      state.editTodo = data
   },

   modifyTodo(state, res) {
      state.todos = res.data.todos
   },


}