import { actions } from "./actions"
import { getters } from "./getters"
import { mutations } from "./mutations"



const todoModule = {
   state: {
      todos: [],
      editTodo: {
         name: '',
         description: ''
      }
   },
   getters,
   mutations,
   actions,
}


export default todoModule