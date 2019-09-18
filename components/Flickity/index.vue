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

      //   let vm = this;
      //   window.onresize = function () {
      //     let height = vm.$refs.flickity_pro.offsetHeight;
      //     document.querySelector(".cmp-slider .flickity-viewport").style.height =
      //       height + "px";

      //     let height2 = vm.$refs.flickity_art.offsetHeight;
      //     document.querySelector(".cmp-slider2 .flickity-viewport").style.height =
      //       height2 + "px";
      //   };

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

    // @include aspect-ratio(21/9);
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

  /*! Flickity v2.2.1
https://flickity.metafizzy.co
---------------------------------------------- */

  .flickity-enabled {
    position: relative;
  }

  .flickity-enabled:focus {
    outline: none;
  }

  .flickity-viewport {
    overflow: hidden;
    position: relative;
    height: 100%;
  }

  .flickity-slider {
    position: absolute;
    width: 100%;
    height: 100%;
  }

  /* draggable */

  .flickity-enabled.is-draggable {
    -webkit-tap-highlight-color: transparent;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }

  .flickity-enabled.is-draggable .flickity-viewport {
    cursor: move;
    cursor: -webkit-grab;
    cursor: grab;
  }

  .flickity-enabled.is-draggable .flickity-viewport.is-pointer-down {
    cursor: -webkit-grabbing;
    cursor: grabbing;
  }

  /* ---- flickity-button ---- */

  .flickity-button {
    position: absolute;
    background: hsla(0, 0%, 100%, 0.75);
    border: none;
    color: #333;
  }

  .flickity-button:hover {
    background: white;
    cursor: pointer;
  }

  .flickity-button:focus {
    outline: none;
    box-shadow: 0 0 0 5px #19F;
  }

  .flickity-button:active {
    opacity: 0.6;
  }

  .flickity-button:disabled {
    opacity: 0.3;
    cursor: auto;
    /* prevent disabled button from capturing pointer up event. #716 */
    pointer-events: none;
  }

  .flickity-button-icon {
    fill: currentColor;
  }

  /* ---- previous/next buttons ---- */

  .flickity-prev-next-button {
    top: 50%;
    width: 44px;
    height: 44px;
    border-radius: 50%;
    /* vertically center */
    transform: translateY(-50%);
  }

  .flickity-prev-next-button.previous {
    left: 10px;
  }

  .flickity-prev-next-button.next {
    right: 10px;
  }

  /* right to left */
  .flickity-rtl .flickity-prev-next-button.previous {
    left: auto;
    right: 10px;
  }

  .flickity-rtl .flickity-prev-next-button.next {
    right: auto;
    left: 10px;
  }

  .flickity-prev-next-button .flickity-button-icon {
    position: absolute;
    left: 20%;
    top: 20%;
    width: 60%;
    height: 60%;
  }

  /* ---- page dots ---- */

  .flickity-page-dots {
    position: absolute;
    width: 100%;
    bottom: -25px;
    padding: 0;
    margin: 0;
    list-style: none;
    text-align: center;
    line-height: 1;
  }

  .flickity-rtl .flickity-page-dots {
    direction: rtl;
  }

  .flickity-page-dots .dot {
    display: inline-block;
    width: 10px;
    height: 10px;
    margin: 0 8px;
    background: #333;
    border-radius: 50%;
    opacity: 0.25;
    cursor: pointer;
  }

  .flickity-page-dots .dot.is-selected {
    opacity: 1;
  }

</style>
