import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  //跨组件需要这个
    list:[],
    // Name:[],
  },
  mutations: {
  addItem(state,value){
    state.list.push(value)
     },
     //传递用户名
     // addName(state,value1){
     //  state.Name.push(value1)
     // }
  },
  actions: {

  }
})
