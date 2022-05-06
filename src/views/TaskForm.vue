<template>
  <div class="task-form-container">
    <div class="page-title">{{ title }}</div>
    <div class="go-back-area" @click="$router.push('/')">
      <font-awesome-icon class="angle-icon" icon="angle-left" />
      Home
    </div>
    <div class="form-container">
      <textarea
        v-model="newTask.description"
        class="task-input"
        rows="20"
        cols="50"
        placeholder="Task Description"
        @keydown.enter="mode === 1 ? submit() : edit()"
      />
      <div class="button-area">
        <button class="create-btn" @click="mode === 1 ? submit() : edit()">
          Add Task
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapMutations, mapState } from "vuex";
export default {
  name: "TaskForm",

  computed: {
    ...mapState("tasks", ["mode"]),

    newTask: {
      get() {
        return this.$store.state.tasks.task;
      },
      set(val) {
        return this.setTask(val);
      },
    },

    title() {
      return this.mode === 1 ? "Create new task" : "Edit task";
    },
  },

  methods: {
    ...mapActions("tasks", ["addTask", "editTask"]),
    ...mapMutations("tasks", ["setTask"]),

    submit() {
      this.addTask(this.newTask);
      this.$router.push("/");
    },

    edit() {
      this.editTask(this.newTask);
      this.$router.push("/");
    },
  },
};
</script>

<style lang="scss" scoped>
.task-form-container {
  padding: 20px 200px;

  .page-title {
    font-size: 30px;
    margin-bottom: 30px;
  }

  .go-back-area {
    margin-bottom: 20px;
    display: flex;
    justify-content: start;
    cursor: pointer;

    .angle-icon {
      margin-right: 5px;
    }
  }

  .form-container {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    width: 100%;

    .task-input {
      padding: 10px 20px;
      border-radius: 12px;
      outline: none;
      border: 2px solid #f28a09;
      color: chocolate;
    }

    .button-area {
      width: 100%;
      display: flex;
      justify-content: center;
      margin-top: 20px;

      .create-btn {
        padding: 10px 20px;
        border: none;
        background: #d28843;
        border-radius: 6px;
        color: white;
        font-weight: bold;
        cursor: pointer;
      }
    }
  }
}
</style>
