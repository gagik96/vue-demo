<template>
  <div class="todo-item">
    <div class="task-description">
      {{ description }}
    </div>
    <div class="actions">
      <font-awesome-icon
        class="actions__icon"
        color="orange"
        icon="pencil"
        @click="$emit('changeTask')"
      />
      <font-awesome-icon
        class="actions__icon"
        color="red"
        icon="trash"
        @click="$emit('deleteTask')"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "ToDoItem",

  props: {
    description: {
      type: String,
      default: "no description for this task",
    },
  },
};
</script>

<style lang="scss" scoped>
.todo-item {
  border: 1px solid black;
  border-radius: 7px;
  display: flex;
  padding: 20px;
  margin-bottom: 10px;

  .task-description {
    width: 80%;
    font-family: sans-serif;
    color: #5b5656;
    font-weight: bold;
  }

  .actions {
    width: 20%;
    font-size: 18px;

    .actions__icon {
      margin: 0px 8px;
      cursor: pointer;
      opacity: 80%;
    }

    .actions__icon:hover {
      opacity: 100%;
    }
  }
}
</style>
