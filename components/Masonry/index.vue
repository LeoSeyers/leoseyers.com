<template>
  <div class="viewer">
    <div class="viewer" :class=" {'viewer--inactive' : !masonryLoaded }">
      <div class="grid-sizer"></div>
      <div class="gutter-sizer"></div>
      <figure v-for="(image, index) in gallery" :key="index" class="item">
        <img :src="image.sizes.medium" :alt="image.alt">
      </figure>
    </div>
  </div>
</template>

<script>
import axios from "axios";

if (process.browser) {
    var Masonry = require("masonry-layout");
    var ImagesLoaded = require("imagesloaded");
}
  
export default {

    data() {
      return {
        grid: null,
        selector: ".viewer",
        masonryLoaded: false,
        gallery: null,
        options: {
          percentPosition: true,
          gutter: ".gutter-sizer",
          itemSelector: ".item",
        //   isInitLayout: false
        }
      }
    },

    mounted() {
        console.log(this.$store.getters)
    this.fetchAPI().then(this.initMasonry)
    },

    methods: {

    async fetchAPI() {
        let response = await axios.get("https://hq.studio-scale.com/wp-json/hq/v1/front");
        this.gallery = response.data.gallery
    },

    initMasonry() {
        ImagesLoaded(this.selector, () => {
             this.grid = new Masonry(this.selector, this.options);
          console.log('images loaded)')
        //   this.grid.layout()
          this.masonryLoaded = true
        });
    },

      loaded() {

        let grid = new Masonry(this.selector, this.options);
        grid.layout()
        // grid.on("layoutComplete", this.masonryRefresh);

        ImagesLoaded(this.selector, () => {
          console.log('images loaded)')
          grid.layout()
          this.masonryLoaded = true

        });
      },

    }
  }

</script>


<style lang="scss" scoped>
@import "~/assets/scss/abstracts/_mixins.scss";

.viewer {
  transition: all 0.35s ease-in-out;
  margin-bottom: 5rem;

  // &--inactive {
  //   opacity: 0;
  // }

  .grid-sizer,
  .item {
    @include max-width(tab-large) {
      width: 48%;
    }

    @include respond(tab-large) {
      width: 30%;
    }

    @include respond(desktop) {
      width: 47%;
    }
  }

  .gutter-sizer {
    @include max-width(tab-large) {
      width: 4%;
    }

    @include respond(tab-large) {
      width: 5%;
    }

    @include respond(desktop) {
      width: 6%;
    }
  }

  .item {
    padding-bottom: 1.3rem;

    @include respond(tab-large) {
      padding-bottom: 3rem;
    }

    @include respond(desktop) {
      padding-bottom: 5rem;
    }

    img {
      display: block;
      width: 100%;
      height: auto;
      // opacity: 0;
      transition: 0.35s ease-in-out;
    }

    .lazyloaded {
      opacity: 1;
    }
  }
}
</style>
