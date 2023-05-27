import { createStore } from 'vuex'
import todoModule from './modules/TodoModule/modules.js'
import authModule from './modules/AuthModule/authModules.js'

export default createStore({
  state:{},
  modules: {
    todoModule,
    authModule 
  },
})
