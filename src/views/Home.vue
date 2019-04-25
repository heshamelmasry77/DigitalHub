<template>
  <div class="home">
    <Categories />
    <Headlines />
  </div>
</template>

<script>
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
