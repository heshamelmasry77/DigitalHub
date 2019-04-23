<template>
  <div class="news">
    <h1>News</h1>
    <h2>Categories</h2>
    <ul>
      <li v-for="category in categories">{{ category }}</li>
    </ul>
  </div>
</template>

<script>
import NEWS_API_KEY from "../utils/constants";
import axios from "axios";

export default {
  name: "News",
  props: {
    // msg: String
  },
  data() {
    return {
      key: NEWS_API_KEY,
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
  },
  mounted() {
    console.log(this.categories);
    axios
      .get(`https://newsapi.org/v2/top-headlines?country=ae&apiKey=${this.key}`)
      .then(response => {
        console.log(response);
      });
  }
};
</script>
