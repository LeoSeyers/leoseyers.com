<template>
  <div class="page">
    <nuxt />
  </div>
</template>

<script>
  import initAccessibility from '~/plugins/accessibility'

  export default {
    mounted() {
      initAccessibility()
    }
  }

</script>



<style lang="scss">

  .page {
    overflow-x: hidden; 
  }

  .f-serif {
    font-family: "Crimson Text", sans-serif;
  }

  .slide-enter-active {
    -moz-transition-duration: 0.3s;
    -webkit-transition-duration: 0.3s;
    -o-transition-duration: 0.3s;
    transition-duration: 0.3s;
    -moz-transition-timing-function: ease-in;
    -webkit-transition-timing-function: ease-in;
    -o-transition-timing-function: ease-in;
    transition-timing-function: ease-in;
  }

  .slide-leave-active {
    -moz-transition-duration: 0.3s;
    -webkit-transition-duration: 0.3s;
    -o-transition-duration: 0.3s;
    transition-duration: 0.3s;
    -moz-transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
    -webkit-transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
    -o-transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
    transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
  }

  .slide-enter-to,
  .slide-leave {
    max-height: 100px;
    overflow: hidden;
  }

  .slide-enter,
  .slide-leave-to {
    overflow: hidden;
    max-height: 0;
  }

  .page-enter-active,
  .page-leave-active {
    transition-property: opacity;
    transition-timing-function: ease-in-out;
    transition-duration: 500ms;
  }

  .page-enter,
  .page-leave-to {
    opacity: 0;
  }


  $t-duration: 800ms;
  $t-delay: 300ms;

  .intro-enter-active,
  .intro-leave-active {
    transition-duration: $t-duration * 2;

    &::before,
    &::after {
      content: "";
      position: fixed;
      top: 0;
      left: 0;
      z-index: 2;
      display: block;
      width: 100%;
      height: 50%;
      transition-property: opacity, transform;
      transition-timing-function: ease-in-out;
    }

    &::before {
      background-color: #fff;
    }

    &::after {
      top: 50%;
      background-color: #fff;
    }
  }

  .intro-leave {

    &::before,
    &::after {
      transform: scaleX(0);
    }
  }

  .intro-leave-active {
    &::before {
      transition-duration: $t-duration;
    }

    &::after {
      transition-duration: $t-duration - $t-delay;
      transition-delay: $t-delay;
    }
  }

  .intro-leave-to {

    &::before,
    &::after {
      transform: scale(1);
      transform-origin: left;
    }
  }

  .intro-enter {

    &::before,
    &::after {
      transform: scaleX(1);
    }
  }

  .intro-enter-active {
    &::before {
      transition-duration: $t-duration;
    }

    &::after {
      transition-duration: $t-duration - $t-delay;
      transition-delay: $t-delay;
    }
  }

  .intro-enter-to {

    &::before,
    &::after {
      transform: scaleX(0);
      transform-origin: right;
    }
  }

</style>
