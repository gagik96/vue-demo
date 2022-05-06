export default {
  namespaced: true,

  state: {
    id: 0,
    tasksList: [],
    task: {
      id: null,
      description: "",
    },
    mode: 1,
  },
  mutations: {
    setTaskToTasksList(state, payload) {
      state.tasksList.push(payload);
    },
    setEditedTask(state, payload) {
      state.tasksList.find((task) => task.id === payload.id).description =
        payload.description;
    },
    setTask(state, payload) {
      state.task = payload;
    },
    setMode(state, payload) {
      state.mode = payload;
    },
    setId(state, payload) {
      state.id = payload;
    },
    removeTaskFromTasksList(state, payload) {
      state.tasksList.forEach((task, index) => {
        if (task.id === payload) state.tasksList.splice(index, 1);
      });
    },
  },
  actions: {
    addTask({ commit, state }, task) {
      task.id = state.id + 1;
      commit("setId", state.id + 1);
      commit("setTaskToTasksList", task);
      commit("setTask", {
        id: null,
        description: "",
      });
    },

    editTask({ commit }, task) {
      commit("setEditedTask", task);
    },

    removeTask({ commit }, id) {
      commit("removeTaskFromTasksList", id);
    },
  },
};
