<template>
  <div class="home-container">
    <div class="page-title">My Tasks</div>
    <div class="create-btn-area">
      <button class="create-btn" @click="addTask()">Add Task</button>
    </div>
    <ToDoItem
      v-for="task in tasksList"
      :key="task.id"
      :description="task.description"
      @changeTask="editTask(task)"
      @deleteTask="removeTask(task.id)"
    />
  </div>
</template>

<script>
import { mapState, mapMutations, mapActions } from "vuex";
import ToDoItem from "../components/ToDoItem.vue";

export default {
  name: "HomePage",

  components: {
    ToDoItem,
  },

  computed: {
    ...mapState("tasks", ["tasksList"]),
  },

  methods: {
    ...mapActions("tasks", ["removeTask"]),
    ...mapMutations("tasks", ["setTask", "setMode"]),

    addTask() {
      this.setMode(1);
      this.$router.push("/task-form");
    },

    editTask(task) {
      this.setMode(2);
      this.setTask(task);
      this.$router.push("/task-form");
    },
  },
};
</script>

<style lang="scss" scoped>
.home-container {
  padding: 20px 200px;

  .page-title {
    font-size: 30px;
    margin-bottom: 30px;
  }

  .create-btn-area {
    display: flex;
    justify-content: start;
    margin-bottom: 20px;

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
</style>
