<template>
  <div class="news">
    <h1>{{ category }}</h1>
    <a style="cursor: pointer; text-decoration: underline" v-on:click="navigate()"
      >Navigate to Home page
    </a>
  </div>
</template>

<script>
import router from "../router";

export default {
  name: "News",
  data() {
    return {
      category: ""
    };
  },
  created() {
    this.category = this.$route.params.category || "general";
  },
  methods: {
    navigate() {
      router.go(-1);
    }
  }
};
</script>
