<template>
  <div class="edit-component popup">
    <div class="content">
      <span class="close cancel">x</span>
      <form @submit.prevent>
        <input
          class="form-control mb-2"
          type="search"
          name="name"
          placeholder="Enter todo title"
          v-model="todoInfo.name"
        />
        <input
          class="form-control mb-2"
          type="search"
          name="description"
          placeholder="Enter todo description"
          v-model="todoInfo.description"
        />
        <input
          class="btn btn-success mb-2 cancel"
          type="submit"
          value="Update"
          @click="modifyTodo()"
        />
        <input
          class="btn btn-danger mb-2 ms-1 cancel"
          type="submit"
          value="cancel"
        />
      </form>
    </div>
    {{ getEditTodo }}
  </div>
</template>

<script>
export default {
  name: "EditComp",
  data: function () {
    return {
      todoInfo: {
        name: "",
        description: "",
        _id: "",
      },
    };
  },
  computed: {
    getEditTodo: function () {
      const todo = this.$store.getters.getEditTodo;
      this.todoInfo.name = todo.name;
      this.todoInfo.description = todo.description;
      this.todoInfo._id = todo._id;
    },
  },
  methods: {
    modifyTodo: function () {
      this.$store.dispatch("modifyTodo", this.todoInfo);
    },
  },
};
</script>

<style scoped lang="scss">
.edit-component {
  position: absolute;
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.233);
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 6px;
  margin: -39px 0 0;
  transition: 1s;
  translate: -100%;
  z-index: 5;
  .content {
    width: 50%;
    background: white;
    padding: 38px 12px 12px;
    border-radius: 6px;
    position: relative;
    .close {
      position: absolute;
      padding: 2px 10px;
      top: 3px;
      right: 1%;
      background: #de1717;
      color: white;
      border-radius: 4px;
      font-size: 17px;
      height: 26px;
      line-height: 100%;
      cursor: pointer;
      transition: 0.3s;
      &:hover {
        background: #c21414;
      }
    }
  }
}

@media (max-width: 600px) {
  .content {
    width: 80% !important;
  }
}
</style>
