import { createStore } from 'vuex'

// Create a new store instance.
export default createStore({
  state () {
    return {
      task: "",
      taskDescription: "",
      estimatedTime: ""
    }
  },
  mutations: {
    setTask (state, payload) {
      return state.task = payload
    },
    setTaskDescription (state, payload) {
      return state.taskDescription = payload
    },
    setEstimatedTime (state, payload) {
      return state.estimatedTime = payload
    },
  }
})