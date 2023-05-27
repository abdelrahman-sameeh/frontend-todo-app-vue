<template>
  <div class="todo rounded p-3 mb-2">
    
    <div class="d-flex justify-content-between align-items-start">
      <span class="title"> {{ name }} </span>
      <form class="d-flex justify-content-center align-items-center" @submit.prevent action="">
        <!-- <input type="hidden" name="todoId" > -->
        <button @click="getTodo(_id)" class="btn btn-dark text-capitalize edit">
          <font-awesome-icon icon="fa-solid fa-pen-to-square" />
          edit
        </button>
        <button @click="deleteTodo(_id)" class="btn btn-danger text-capitalize ms-1">
          <font-awesome-icon icon="fa-solid fa-trash" />
          delete
        </button>
      </form>
    </div>

    <div class="description  mt-1">
      {{ description }}
    </div>

  </div>
</template>

<script>
export default {
  name: "TodoComp",
  props: ["name", "description", "_id"],
  methods : {
    deleteTodo: function(id){
      this.$store.dispatch('deleteTodo', id)
    },
    getTodo: function(id){
      this.$store.dispatch('getTodoById', id)
    },
  },
  computed: {}

};
</script>

<style lang="scss" scoped>
.todo {
  background-color: #dddddd;
  .title {
    font-size: 20px;
    font-family: cursive;
    text-transform: capitalize;
    font-weight: bold;
  }
  .description {
    line-height: 1.8;
    font-size: 16px;
    font-family: auto;
    overflow-wrap: anywhere;
  }
}
</style>
