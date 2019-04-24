<template>
  <div class="news">
    <h1>{{ category }}</h1>
    <a style="cursor: pointer; text-decoration: underline" v-on:click="navigate()">
      Navigate to Home page
    </a>
    <ul>
      <li v-for="(article, index) in articles" v-bind:key="index">
        <h2>{{ article.title }}</h2>
        <img :src="article.urlToImage" :alt="article.title" v-if="article.urlToImage" />
        <p>{{ article.description }}</p>
      </li>
    </ul>
  </div>
</template>

<script>
import router from "../router";
import axios from "axios";
import NEWS_API_KEY from "../utils/constants";

export default {
  name: "News",
  data() {
    return {
      key: NEWS_API_KEY,
      category: "",
      articles: []
    };
  },
  created() {
    this.category = this.$route.params.category || "general";
  },
  mounted() {
    axios
      .get(
        `https://newsapi.org/v2/top-headlines?country=ae&category=${this.category}&apiKey=${
          this.key
        }`
      )
      .then(response => {
        this.articles = response.data.articles;
      });
  },
  methods: {
    navigate() {
      router.go(-1);
    }
  }
};
</script>
