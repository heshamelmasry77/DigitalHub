<template>
  <div class="headlines">
    <h3>Headlines</h3>
    <ul>
      <li v-for="(headline, index) in headLines" v-bind:key="index">
        <p>{{ headline.title }}</p>
        <img :src="headline.urlToImage" :alt="headline.title" v-if="headline.urlToImage" />
      </li>
    </ul>
  </div>
</template>

<script>
import axios from "axios";
import NEWS_API_KEY from "../utils/constants";

export default {
  name: "Headlines",
  props: {},
  data() {
    return {
      key: NEWS_API_KEY,
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
