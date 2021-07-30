import { createStore } from 'vuex'
import idGenerator from '../utils/idGenerator'

export default createStore({
  state: {
    list: []
  },
  getters: {
    getList(state) { return state.list },
  },
  mutations: {
    setList(state, list) {
        state.list = list
    },
    setTask(state, title) { 
        state.list.push({
            id: idGenerator(),
            title: title,
            done: false
        }) 
    },
    deleteTask(state, id) { 
        const index = state.list.findIndex((task) => task.id === id)
        state.list.splice(index, 1) 
    },
    checkTask(state, id) {
        const task = state.list.find((task) => task.id === id)
        task.done = !task.done
    }
  },
  actions: {
    saveData({state}) {
        window.localStorage.setItem('list', JSON.stringify(state.list))
    },
    loadData({commit}) {
        const list = JSON.parse(window.localStorage.getItem('list'))
        commit('setList', list || [])
    }
  }
})
