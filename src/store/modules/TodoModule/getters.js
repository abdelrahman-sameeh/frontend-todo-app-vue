export const getters = {
   allTodos: (state) => {
      return state.todos
   },
   getEditTodo: (state) => {
      return state.editTodo
   }
}