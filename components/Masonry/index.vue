<template>
  <div class="viewer">
    <div class="viewer" :class=" {'viewer--inactive' : !masonryLoaded }">
      <div class="grid-sizer"></div>
      <div class="gutter-sizer"></div>
      <figure
        v-for="(image, index) in gallery"
        :key="index"
        class="item"
        :class=" image.cat.join(' ') "
      >
        <img :src="image.sizes.large" :alt="image.alt">
      </figure>
    </div>
  </div>
</template>

<script>
import axios from "axios";

if (process.browser) {
  var Isotope = require("isotope-layout");
  var ImagesLoaded = require("imagesloaded");
}

export default {

  computed: {
    gallery() {
      return this.$store.getters.gallery;
    }
  },

  data() {
    return {
        grid: null,
        selector: ".viewer",
        masonryLoaded: false,
        options: {
          percentPosition: true,
          itemSelector: ".item",
          masonry: {
            columnWidth: '.grid-sizer',
            gutter: '.gutter-sizer'
          },
        }
      }
    },

    mounted() {
       this.initMasonry()
    },

    methods: {
      initMasonry() {
        ImagesLoaded(this.selector, () => {
        this.grid = new Isotope(this.selector, this.options);
        this.masonryLoaded = true
        });
      },

      jointer(arr) {
        let str;
        if (arr.length > 0) {
          for (var i = 0; i < arr.length; i++) {
            str+= '' + arr[i]
          }
        }   
      },

      filter(cat) {
        this.grid.arrange({ filter: cat });
      }

  }
 }


</script>


<style lang="scss" scoped>
@import "~/assets/scss/abstracts/_mixins.scss";

.viewer {
  transition: all 0.35s ease-in-out;

  // &--inactive {
  //   opacity: 0;
  // }

  .grid-sizer,
  .item {
    width: 47%;
  }

  .gutter-sizer {
    width: 6%;
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
