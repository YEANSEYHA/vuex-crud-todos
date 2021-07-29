import { createStore } from 'vuex'
import axios from 'axios'

export default createStore({
  state: {
    todos:[
      {
        id: 1,
        title: "Todo one"
      },
      {
        id: 2,
        title: "Todo two"
      }
    ]
  },
  
  actions: {
    async fetchTodos({commit}){
      const response = await axios.get('https://jsonplaceholder.typicode.com/todos');
      
      commit('setTodos', response.data)
    }
  },
  mutations: {
    // pass data(dotos) to state
    setTodos: (state, todos)=>(state.todos = todos)
  },

  getters:{
    allTodos: (state) => state.todos
  },
  
  modules: {
  }
})
