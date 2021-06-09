import Vuex from 'vuex'
import actions from './actions'
import getters from './getters'
import mutations from './mutations'
const createStore=()=>{
  return new Vuex.Store({
    state(){
      return{
        userId:null,
        token:null,
        tokenExpiration:null,
        displayName:null
      }
    },
    mutations,
    actions,
    getters
  })
}
export default createStore
