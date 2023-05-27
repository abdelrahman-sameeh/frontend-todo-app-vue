<template>
  <EditComp />
  <div class="container home-container mt-5">
    <div class="d-flex my-3 justify-content-between align-items-center">
      <p class="name fs-5 bold text-capitalize">Hello MR {{ getUsername }}</p>
      <router-link class="btn btn-danger logout" to="/login" @click="logout()">
        Logout
        <font-awesome-icon icon="fa-solid fa-right-from-bracket" />
      </router-link>
    </div>
    <form @submit.prevent>
      <input
        class="form-control mb-2"
        :class="{'is-invalid': errors.name}"
        type="text"
        name="name"
        placeholder="Enter todo title"
        v-model="todoInfo.name"
      />
      <span v-if="errors.name" class="invalid-feedback d-flex">
        {{ errors.name }}
      </span>
      <input
        class="form-control mb-2"
        :class="{'is-invalid': errors.description}"
        type="text"
        name="description"
        placeholder="Enter todo description"
        v-model="todoInfo.description"
      />
      <span v-if="errors.description" class="invalid-feedback d-flex">
        {{ errors.description }}
      </span>
      <div class="btns d-flex">
        <button
          @click="handleAddTodo()"
          class="btn btn-success mb-2 center gap-1"
          type="submit"
        >
          <span class="plus bg-light text-success rounded m-0 px-1 center">
            +
          </span>
          Add
        </button>

        <button
          v-if="todos.length"
          @click="deleteAll()"
          class="btn btn-danger mb-2 ms-1"
          type="submit"
        >
          <font-awesome-icon icon="fa-solid fa-trash" />
          Delete all
        </button>
      </div>
    </form>

    <div v-if="todos.length" class="todos">
      <TodoComp
        v-for="todo in todos"
        :key="todo._id"
        :name="todo.name"
        :description="todo.description"
        :_id="todo._id"
      />
    </div>
    <div v-else>
      <div class="alert alert-dark fs-4 fw-bold text-center">
        you have no todo
      </div>
    </div>
  </div>
</template>

<script>
import TodoComp from "@/components/HomeComp/TodoComp";
import EditComp from "@/components/HomeComp/EditComp";
import { notify } from "@kyvg/vue3-notification";
export default {
  name: "HomeContainerComp",
  data: function () {
    return {
      todoInfo: {
        name: "",
        description: "",
      },
      errors: {},
    };
  },
  components: {
    TodoComp,
    EditComp,
  },
  computed: {
    todos: function () {
      return this.$store.getters.allTodos;
    },
    getEditTodo: function () {
      return this.$store.getters.getEditTodo;
    },
    getUsername: function () {
      return window.localStorage.getItem("username");
    },
  },
  methods: {
    addTodo: async function (data) {
      await this.$store.dispatch("addTodo", data);
      this.todoInfo.name = "";
      this.todoInfo.description = "";
      setTimeout(async () => {
        await this.$store.dispatch("getAllTodos");
      }, 100);
    },

    handleAddTodo: function () {
      this.errors = {};
      if (!this.todoInfo.name) {
        this.errors.name = "Enter todo title";
      }
      if (!this.todoInfo.description) {
        this.errors.description = "Enter todo description";
      }
      console.log(this.errors);
      if (!Object.keys(this.errors).length) {
        this.addTodo(this.todoInfo);
      }
    },

    deleteAll: function () {
      this.$store.dispatch("deleteAllTodos");
    },
    logout: function () {
      window.localStorage.removeItem("token");
      window.localStorage.removeItem("username");
      this.$store.dispatch("getAllTodos");
      notify({
        text: "Logout successfully ",
        type: "success",
        title: "Logout",
      });
    },
  },
  mounted: function () {
    this.$store.dispatch("getAllTodos");
    if (window.localStorage.getItem("token")) {
      this.$store.dispatch("setToken");
      this.$store.dispatch("getAllTodos");
    }
  },
};
</script>

<style scoped lang="scss">
.name {
  padding: 5px 10px;
  margin: 0px;
  background: #0277bd;
  color: white;
  border-radius: 6px;
}
form {
  flex: 1;
  .plus {
    height: 18px;
    font-size: 17px;
    line-height: 0px;
  }
}
</style>
