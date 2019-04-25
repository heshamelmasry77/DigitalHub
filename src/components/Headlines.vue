<template>
  <div class="headlines">
    <div class="container">
      <div class="d-flex justify-content-start mt-1">
        <h2><span class="badge badge-secondary">Headlines</span></h2>
      </div>
      <div class="row" v-if="headLines.length > 0">
        <div class="col-sm-3" v-for="(headline, index) in headLines" v-bind:key="index">
          <div class="card" style="width: 100%;">
            <img
              :src="headline.urlToImage"
              :alt="headline.title"
              v-if="headline.urlToImage"
              class="card-img-top"
            />
            <div class="card-body">
              <h5 class="card-title">{{ headline.title }}</h5>
            </div>
          </div>
        </div>
      </div>
      <h1 v-else>Oh no headlines 😢</h1>
    </div>
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
