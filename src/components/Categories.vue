<template>
  <div class="Categories">
    <div class="jumbotron jumbotron-fluid">
      <div class="container">
        <h1 class="display-4">Digital News</h1>
      </div>
    </div>
    <div class="container">
      <div class="d-flex justify-content-start">
        <h1><span class="badge badge-secondary">categories</span></h1>
      </div>
      <ul class="list-group list-group-horizontal-sm justify-content-start">
        <li class="list-group-item" v-for="(category, index) in categories" v-bind:key="index">
          <router-link
            class="text-monospace"
            :to="{ name: 'news', params: { category: category } }"
            >{{ category }}</router-link
          >
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "Categories",
  props: {},
  data() {
    return {
      categories: [
        "business",
        "entertainment",
        "general",
        "health",
        "science",
        "sports",
        "technology"
      ]
    };
  }
};
</script>
