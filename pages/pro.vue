<template>
  <main>
    <div class="logo">
      <h1 class="c-white fs-m">
        <nuxt-link to="/">Léo Seyers</nuxt-link>
      </h1>
    </div>

    <div class="navigation-toggle" @click="toggleMenu">
      <div class="navigation-toggle__dot"></div>
    </div>

    <nav class="navigation-panel c-white bg-black" :class="{ navigation_inactive : menuState }">
      <div class="navigation-panel__wrapper">
        <div>
          <p class="fs-s pb-4">Filter</p>
          <ul class="navigation-panel__list fs-m">
            <li class="navigation-panel__item" @click=" filter('*') ">
              <span></span>All
            </li>
            <li class="navigation-panel__item"  @click=" filter('food') ">
              <span></span>Food
            </li>
            <li class="navigation-panel__item" @click=" filter('interior') ">
              <span></span>Interiors
            </li>
             <li class="navigation-panel__item" @click=" filter('reportage') ">
              <span></span>Reportage
            </li>
            <li class="navigation-panel__item" @click=" filter('product') ">
              <span></span>Products
            </li>
          </ul>
        </div>

        <div>
          Contact
          <!-- at some point I should think about this  -->
        </div>
      </div>
    </nav>

    <div class="nav-wrapper" :class="{ body_inactive : menuState } ">
      <section
        class="landing"
        style="background-image:url(https://hq.studio-scale.com/wp-content/uploads/2019/05/c12-main-1500x1001.jpg)"
      >
        <div class="landing-slide" :class="{ landing_active : onLoadState }"></div>
        <h2 class="c-white fs-xl ta-c">
          <div class="line-wrapper">
            <div class="chunk-wrapper" v-for="(chunks, i) in intro[0]" :key=" 'chunks0' + i">
              <div class="outer" v-html="chunks"></div>
              <div class="inner" v-html="chunks"></div>
            </div>
          </div>

          <div class="line-wrapper">
            <div class="chunk-wrapper" v-for="(chunks, i) in intro[1]" :key=" 'chunks1' + i">
              <div class="outer" v-html="chunks"></div>
              <div class="inner" v-html="chunks"></div>
            </div>
          </div>
        </h2>
      </section>

      <section class="gallery bg-white c-darkgray">
        <div class="wrapper">
          <cmpMasonry ref="isotope" />
        </div>
      </section>

      <cmpFooter/>
    </div>
  </main>
</template>

<script>
  import cmpFooter from "../components/Footer/index.vue"
  import cmpMasonry from "../components/Masonry/index.vue"
  import Isotope from 'isotope-layout'

  export default {
    components: {
      cmpFooter,
      cmpMasonry
    },

    
    data() {
      return {
        menuState: false,
        onLoadState: false,
        intro: [ 
          ['I ', 'produce ', 'visual content ', 'for apps '],
          [ 'and ', 'digital platforms']
        ]
      }
    },

    mounted() {

      window.onresize = null
      const vm = this
      setTimeout(() => {
        vm.onLoadState = true
        this.animateLanding()
      }, 200);

    

    },

    methods: {
      toggleMenu() {
        this.menuState = !this.menuState
      },

      animateLanding() {
        let elems = document.querySelectorAll('.inner')
        Array.prototype.forEach.call(elems, (el, i) => {
              setTimeout( () => {
           el.classList.add('inner--active')
          }, 200 * i)
        })
      },

      filter(cat) {
        this.$refs.isotope.filter(cat);
      }

    }
  }

</script>

<style lang="scss" scoped>
@import "~/assets/scss/abstracts/_mixins.scss";

.line-wrapper {
  display: flex;
  justify-content: center;
}

.chunk-wrapper {
  position: relative;
  overflow: hidden;
  margin-right: 1rem;
}

.outer {
  visibility: hidden;
}

.inner {
  position: absolute;
  left: 0;
  top: 0;
  transition: all 0.35s ease-in;
  will-change: transform, opacity;
  transform: translateY(100%) rotate(5deg);
  opacity: .5;

  &--active {
    transform: translateY(0%) rotate(0deg);
    opacity: 1;
  }
}

li {
  list-style: none;
}

.logo {
  position: fixed;
  z-index: 666;
  top: 7vw;
  left: 7vw;

  @include respond(phone-medium) {
    top: 10vw;
    left: 10vw;
  }

  @include respond(tab-large) {
    top: 4rem;
    left: 10vh;
  }
}

.nav-wrapper {
  will-change: transform;
  transition: all 0.25s ease-in-out;
}

.navigation-toggle {
  position: fixed;
  z-index: 666;
  padding: 1rem;
  cursor: pointer;
  top: 7vw;
  right: 7vw;
  transform: translateY(-20%);

  @include respond(phone-medium) {
    top: 10vw;
    right: 10vw;
  }

  @include respond(tab-large) {
    top: 4rem;
    right: 10vh;
  }

  &__dot {
    width: 0.8rem;
    height: 0.8rem;
    border-radius: 100%;
    background-color: #fff;
  }
}

.landing {
  position: relative;
  width: 100%;
  height: 75vh;
  background-position: center;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;

  @include respond(tab-large) {
    height: 85vh;
  }

  h2 {
    z-index: 2;
    display: flex;
    flex-direction: column;
  }
}

.landing-slide {
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 1;
  opacity: 0.2;
  will-change: opacity;
  transition: opacity 0.5s cubic-bezier(0.455, 0.03, 0.515, 0.955);
  background-color: #000;
}

.navigation-panel {
  position: fixed;
  z-index: 665;
  top: 0;
  right: 0;
  height: 100vh;
  width: 100%;
  will-change: transform;
  transform: translateX(100%);
  transition: all 0.25s ease-in-out;

  @include respond(tab-large) {
    width: calc(25% + 4px);
  }

  &__wrapper {
    width: 100%;
    height: 100%;
    padding: 7vw;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    @include max-width(tab-large) {
      padding-top: 12rem !important;
    }

    @include respond(phone-medium) {
      padding: 10%;
    }

    @include respond(tab-large) {
      padding: 4rem;
    }
  }

  &__item {
    span {
      display: inline-block;
      padding: 0;
      width: 0rem;
      height: 1px;
      background-color: #fff;
      transform: translateY(-0.35rem);
      will-change: width, margin;
      transition: all 0.35s ease-in-out;
    }

    &:hover span {
      margin-right: 1rem;
      width: 1.2rem;
    }
  }
}

.body_inactive {
  @include respond(tab-large) {
    transform: translateX(-25%);
    opacity: 0.3;

    .navigation-panel {
      right: 2px;
    }
  }
}

.navigation_inactive {
  transform: translateX(0%);
}

.landing_active {
  opacity: 0.6;
}

.wrapper {
  @include max-width(phone-medium) {
    padding: 7vw;
  }
}
</style>
