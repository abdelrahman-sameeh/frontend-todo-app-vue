<template>
  <div class="home">
    <HomeContainerComp />
  </div>
</template>

<script>
// @ is an alias to /src
import HomeContainerComp from "@/components/HomeComp/HomeContainerComp.vue";

export default {
  name: "HomeView",
  components: {
    HomeContainerComp,
  },
  beforeRouteEnter(to, from, next) {
    if (to.meta.isAuth) {
      // Check if the user is authenticated
      const isAuthenticated = window.localStorage.getItem('token') ; // Implement your own authentication check logic

      if (isAuthenticated) {
        next(); // Proceed to the route
      } else {
        next("/login"); // Redirect to another route, such as the login page
      }
    } 
  },
};
</script>
