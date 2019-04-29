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
              <input :id="index" class="toggle-heart" type="checkbox" />
              <label :for="index" class="toggle-heart-label"><span>❤</span></label>
            </div>
          </div>
        </div>
      </div>
      <h1 v-else>loading...</h1>
    </div>
  </div>
</template>
<style lang="scss">
$bubble-d: 4.5rem; // bubble diameter
$bubble-r: 0.5 * $bubble-d; // bubble-radius

.card-custom {
  background: #f5f5f5;
  padding: 10px;
  display: inline-block;
  margin: 0 0 1em;
  cursor: pointer;
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

.toggle-heart {
  position: absolute;
  left: -100vw;
}

.toggle-heart-label {
  color: #aab8c2;
  font-size: 2em;
  cursor: pointer;
  position: relative;

  &:before,
  &:after {
    position: absolute;
    z-index: 1;
    top: 50%;
    left: 50%;
    border-radius: 50%;
    content: "";
  }

  &:before {
    margin: -$bubble-r;
    width: $bubble-d;
    height: $bubble-d;
    background: gold;
    box-sizing: border-box;
    border: solid $bubble-r #e2264d;
    transform: scale(0);
  }

  span {
    z-index: 2;
    position: relative;
  }
}

@keyframes heart {
  0%,
  17.5% {
    font-size: 0;
  }
}

@keyframes bubble {
  15% {
    border-color: #cc8ef5;
    border-width: $bubble-r;
    transform: scale(1);
  }
  30%,
  100% {
    border-color: #cc8ef5;
    border-width: 0;
    transform: scale(1);
  }
}

.toggle-heart:checked + label {
  color: #e2264d;
  will-change: font-size;
  animation: heart 1s cubic-bezier(0.17, 0.89, 0.32, 1.49);

  &::before,
  &::after {
    animation: inherit;
    animation-timing-function: cubic-bezier(0.21, 0.61, 0.35, 1);
  }

  &::before {
    will-change: transform, border-color, border-width;
    animation-name: bubble;
  }

  &::after {
    animation-name: particles;
  }
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
