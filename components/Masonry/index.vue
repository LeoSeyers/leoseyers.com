<template>
  <div class="viewer" :class=" { viewer_inactive : !masonryLoaded} ">
    <div class="viewer" :class=" {'viewer--inactive' : !masonryLoaded }">
      <div class="grid-sizer"></div>
      <div class="gutter-sizer"></div>
      <figure
        v-for="(image, index) in gallery"
        :key="index"
        class="item"
        :class=" image.cat.join(' ') "
      >
        <picture>
          <!--[if IE 9]><video style="display: none"><![endif]-->
          <source
            :data-srcset="image.sizes.medium  + '.webp' "
            media="(max-width: 720px)"
            type="image/webp"
          >
          <source :data-srcset="image.sizes.medium" media="(max-width: 720px)" type="image/jpg">
          <source :data-srcset="image.sizes.large  + '.webp'" type="image/webp">
          <source :data-srcset="image.sizes.large" type="image/jpg">
          <!--[if IE 9]></video><![endif]-->
          <img
            :src="image.sizes.preload"
            :data-src="image.sizes.large"
            class="lazyload"
            :alt="image.alt"
          >
        </picture>
      </figure>
    </div>
  </div>
</template>

<script>
import axios from "axios";

if (process.browser) {
  var Isotope = require("isotope-layout");
  // var ImagesLoaded = require("imagesloaded");
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
      const lazyInit = () => import("lazysizes");
      lazyInit();
      this.initMasonry()
    },

    methods: {
      initMasonry() {
        this.grid = new Isotope(this.selector, this.options);
        this.masonryLoaded = true
       
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

  &_inactive {
    opacity: 0;
  }

  .grid-sizer,
  .item {
    width: 47%;
  }

  .gutter-sizer {
    width: 6%;
  }

  .item {
    // margin-bottom: 1.5rem;
    margin-bottom: 6vw;
    background-color: #ececec;
    @include aspect-ratio(4/3);

    @include respond(tab-large) {
      margin-bottom: 3rem;
    }

    @include respond(desktop) {
      margin-bottom: 5rem;
    }

    img {
      display: block;
      width: 100%;
      height: 100%;
      transition: 0.35s ease-in-out;
    }

    .lazyloaded {
      opacity: 1;
    }
  }
}
</style>
