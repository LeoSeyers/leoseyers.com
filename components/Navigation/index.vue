<template>
  <nav class="navigation">
    <div class="wrapper wrapper--header">
      <h1 style="color:#333">Fotoscope</h1>
      <h2 style="color:#333">Photography &amp; Art Direction</h2>

      <button @click="goTo" class="navigation__toggle">
        {{ linkTitle }}
      </button>
    </div>

  </nav>
</template>

<script>
  export default {
    data() {
      return {
        isHomepage: undefined
      }
    },

    computed: {
      linkTitle: function () {
        return this.isHomepage ? 'Info' : 'Portfolio';
      },
    },

    mounted() {
      $nuxt.$route.path === '/' ? this.isHomepage = true : this.isHomepage = false
    },

    methods: {
      goTo() {
        
        if ($nuxt.$route.path === '/') {
          this.$router.push({
            path: '/info'
          })
          this.isHomepage = false
        } else {
          this.$router.push({
            path: '/'
          })
          this.isHomepage = true
        }
      }
    }
  }

</script>

<style lang="scss">
  @import "~/assets/scss/abstracts/_mixins.scss";

  .navigation {
    position: fixed;
    top: 0;
    width: 100%;
    background-color: #fff;
    z-index: 666;

    .wrapper {
    @include respond(tab-large) {
        padding: 2rem 0;
        }

        &--header {
          @include respond(tab-large) {
          padding-bottom: 1.3rem;
        }
      }
    }

    h1,
    h2 {
      @include font-size(s);
      @include respond(tab-large) {
        display: inline-block;
      }
    }

    h1 {
        position: relative;
        padding-right: 1.25rem;
        display: inline-block;
        font-weight: 600;
        text-transform: uppercase;
        letter-spacing: 0.1rem;
        margin-bottom: 0.5rem;
        transform: scale(0.9,0.9);
       transform-origin: left;
        
        &:after {
          @include respond(tab-large) {
          position: absolute;
          display: block;
          content: ' ';
          right: 0;
          top: 0;
          background: #e2e2e2;
          height: 70%;
          width: 1px;
          top: 50%;
          transform: translateY(-50%)

          }
        }
        
    }

    h2 {
      font-weight: 300;

        @include respond(tab-large) {
            padding-left: .7rem;
        }
    }

    &__toggle {
      position: absolute;
      top: 1.7rem;
      right: 0;
      // padding: .3rem .8rem;
      cursor: pointer;
      border: solid 1px #ececee00;
      background-color: #fff;
      transition: border .35s ease-in-out;
      letter-spacing: 0.1rem;
      font-weight: 300;

      @include font-size(s);
      @include max-width(tab-large) {
        right: 1.5rem;
        top: 2.2rem;
      }
      @include respond(tab-large) {
        
      }

      span {
        display: none;
      }


    }
  }

</style>
