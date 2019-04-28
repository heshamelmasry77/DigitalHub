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
        <div
          class="col-sm-3 mt-2 card-custom"
          v-for="(article, index) in articles"
          v-bind:key="index"
        >
          <div class="card" style="width: 100%">
            <SVG-filter-image
              :src="article.urlToImage"
              v-if="article.urlToImage"
              :alt="article.title"
            ></SVG-filter-image>
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
<style>
.card-custom {
  background: #f5f5f5;
  padding: 10px;
  display: inline-block;
  margin: 0 0 1em;
  cursor: pointer;
  -webkit-perspective: 1000;
  -webkit-backface-visibility: hidden;
  transition: all 100ms ease-in-out;
}
.card-custom:hover {
  transform: translateY(-0.5em);
  background: #ebebeb;
}
img {
  display: block;
  width: 100%;
}
</style>
<script>
import router from "../router";
import axios from "axios";
import NEWS_API_KEY from "../utils/constants";
import SVGFilterImage from "../components/SVGFilterImage";
export default {
  name: "News",
  components: {
    SVGFilterImage
  },
  data() {
    return {
      key: NEWS_API_KEY,
      category: "",
      articles: []
    };
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
