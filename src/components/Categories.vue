<template>
  <div class="Categories">
    <h2>Categories</h2>
    <ul>
      <li v-for="(category, index) in categories" v-bind:key="index">
        <router-link :to="{ name: 'news', params: { category: category } }">{{
          category
        }}</router-link>
      </li>
    </ul>
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
