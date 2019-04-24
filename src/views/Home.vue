<template>
  <div class="home">
    <Categories />
    <Headlines />
  </div>
</template>

<script>
// @ is an alias to /src
import Headlines from "../components/Headlines";
import Categories from "../components/Categories";

export default {
  name: "home",
  components: {
    Categories,
    Headlines
  }
};
</script>
