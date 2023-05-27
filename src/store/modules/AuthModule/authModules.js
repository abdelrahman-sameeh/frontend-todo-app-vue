import { authGetters } from "./authGetters"
import { authMutations } from "./authMutations"
import { authActions } from "./authActions"



const authModule = {
   state: {
      token: null,
   },
   getters: authGetters,
   mutations: authMutations,
   actions: authActions,
}


export default authModule