<template>
  <div class="cmp-slider" :class="{ inactive : !flickityLoaded} ">
    <div class="carousel" ref="carousel">
      <div v-for="(image, index) in gallery" :key=" 'art' + index" class="carousel-cell">
        <picture>
          <!--[if IE 9]><video style="display: none"><![endif]-->
          <source :data-srcset="image.sizes.medium  + '.webp' " media="(max-width: 720px)" type="image/webp">
          <source :data-srcset="image.sizes.medium" media="(max-width: 720px)" type="image/jpg">
          <source :data-srcset="image.sizes.large  + '.webp'" type="image/webp">
          <source :data-srcset="image.sizes.large" type="image/jpg">
          <!--[if IE 9]></video><![endif]-->
          <img :src="image.sizes.preload" :data-src="image.sizes.large" class="lazyload" :alt="image.alt">
        </picture>
      </div>
    </div>
  </div>
</template>

<script>
  if (process.browser) {
    var Flickity = require("flickity");
  }

  export default {
    props: {
      gallery: Array,
    },

    data() {
      return {
        flickityLoaded: false,
        options: {
          prevNextButtons: false,
          pageDots: false,
          wrapAround: true,
          setGallerySize: false
        }
      }
    },

    mounted() {
      const lazyInit = () => import("lazysizes");

      window.lazySizesConfig = window.lazySizesConfig || {};
      lazySizesConfig.loadMode = 1;
      lazyInit();

      this.selector = this.$refs.carousel
      this.initFlickity()

    },

    methods: {
      initFlickity() {
        this.flkty = new Flickity(this.selector, this.options);
        this.flickityLoaded = true
      },

    }
  }

</script>


<style lang="scss" scoped>
  @import "~/assets/scss/abstracts/_mixins.scss";

  .inactive {
    opacity: 0;
  }

  .cmp-slider {
    transition: all 0.35s ease-in-out;
    position: relative;
    width: 100%;
    height: 25rem;
    cursor: move;
    cursor: pointer;

    @include respond(tab-large) {
      height: 50rem;
    }

  }


  .carousel {
    display: block;
    height: 100%;
    width: 100%;

    .carousel-cell {
      width: 75%;
      height: 25rem;

      @include respond(tab-large) {
        height: 50rem;
      }

      &.is-selected img {
        transform: scale(1);
      }

      img {
        display: block;
        width: 95%;
        height: 100%;
        margin: auto;
        object-fit: contain;
        transition: opacity 0.3s, transform 0.3s, filter 0.3s;
        transform: scale(0.75);
        will-change: transform;
      }
    }

    .flickity-viewport {
      transition: height 0.2s;
    }

    .flickity-viewport.is-pointer-down {
      .is-selected img {
        transform: scale(0.9);
      }
    }
  }

</style>
