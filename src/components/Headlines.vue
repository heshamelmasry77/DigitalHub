<template>
  <div class="headlines">
    <div class="container">
      <div class="d-flex justify-content-start mt-1">
        <h2><span class="badge badge-secondary">Headlines</span></h2>
      </div>
      <div class="row" v-if="headLines.length > 0">
        <div class="col-sm-3 card-custom" v-for="(headline, index) in headLines" v-bind:key="index">
          <div class="card" style="width: 100%;">
            <SVG-filter-image
              :src="headline.urlToImage"
              v-if="headline.urlToImage"
              :alt="headline.title"
            ></SVG-filter-image>
            <div class="card-body">
              <h5 class="card-title">{{ headline.title }}</h5>
              <p class="card-text">{{ headline.description }}</p>
            </div>
          </div>
        </div>
      </div>
      <h1 v-else>loading..</h1>
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
import axios from "axios";
import NEWS_API_KEY from "../utils/constants";
import SVGFilterImage from "../components/SVGFilterImage";

export default {
  name: "Headlines",
  props: {},
  components: {
    SVGFilterImage
  },
  data() {
    return {
      key: NEWS_API_KEY,
      headLines: []
    };
  },
  created() {
    axios
      .get(`https://newsapi.org/v2/top-headlines?country=ae&apiKey=${this.key}`)
      .then(response => {
        this.headLines = response.data.articles;
      });
  }
};
</script>
