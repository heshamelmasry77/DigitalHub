<template>
  <div class="news">
    <div class="container">
      <div class="jumbotron">
        <h1 class="display-4">{{ category }}</h1>
        <a
          class="btn btn-primary btn-lg"
          style="cursor: pointer; text-decoration: underline; color:white;"
          v-on:click="navigate()"
        >
          Navigate to Home page
        </a>
      </div>
      <div class="row" v-if="articles.length > 0">
        <div class="col-sm-3 mt-2" v-for="(article, index) in articles" v-bind:key="index">
          <div class="card" style="width: 100%">
            <img
              :src="article.urlToImage"
              :alt="article.title"
              v-if="article.urlToImage"
              class="card-img-top"
            />
            <div class="card-body">
              <h5 class="card-title">{{ article.title }}</h5>
              <p class="card-text">{{ article.description }}</p>
            </div>
          </div>
        </div>
      </div>
      <h1 v-else>loading...</h1>
    </div>
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
