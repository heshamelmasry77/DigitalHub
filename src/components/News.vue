<template>
  <div class="news">
    <h1>News</h1>
    <h2>Categories</h2>
    <ul>
      <li v-for="category in categories" v-bind:key="category.id">{{ category }}</li>
    </ul>
    <h3>Headlines</h3>
    <ul>
      <li v-for="headline in headLines" v-bind:key="headline.id">
        <img :alt="headline.title" v-if="headline.urlToImage" :src="headline.urlToImage" />
        <p>{{ headline.title }}</p>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from "axios";
import NEWS_API_KEY from "../utils/constants";

export default {
  name: "News",
  props: {},
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
      ],
      headLines: []
    };
  },
  mounted() {
    axios
      .get(`https://newsapi.org/v2/top-headlines?country=ae&apiKey=${this.key}`)
      .then(response => {
        this.headLines = response.data.articles;
      });
  }
};
</script>
