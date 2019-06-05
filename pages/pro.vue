<template>
  <main>
    <div class="logo">
      <h1 class="c-white fs-m">Léo Seyers</h1>
      <!-- <h2 class="c-white fs-s">Professional Portfolio</h2> -->
    </div>
    <!-- with nuxt link -->

    <div class="navigation-toggle" @click="toggleMenu">
      <div class="navigation-toggle__dot"></div>
    </div>
    <!-- cmp that emit a toggle event within pro store  -->

    <div class="nav-wrapper">
      <!-- toggle class will be computed and applied to nav wrapper  -->

      <nav class="navigation-panel navigation-panel--inactive c-white bg-black">
        <div class="navigation-panel__wrapper">
          <!-- flex container  -->
          <div>
            <p class="fs-s pb-2">Filter</p>
            <ul class="navigation-panel__list fs-m">
              <li class="navigation-panel__item" data-filter="all">All</li>
              <li class="navigation-panel__item" data-filter="all">Food</li>
              <li class="navigation-panel__item" data-filter="all">Culinary</li>
              <li class="navigation-panel__item" data-filter="all">Architecture</li>
              <li class="navigation-panel__item" data-filter="all">Products</li>
            </ul>
          </div>

          <div>
            Contact
            <!-- at some point I should think about this  -->
          </div>
        </div>
      </nav>

      <section
        class="landing"
        style="background-image:url(https://hq.studio-scale.com/wp-content/uploads/2019/05/c12-main-1500x1001.jpg)"
      >
        <div class="landing-slide"></div>
        <h2 class="c-white fs-xl ta-c">
          I produce visual content for apps
          <br>and digital platforms
        </h2>
      </section>

      <section class="section-wrapper">
        <div class="masonry"></div>
        <!-- could be a masonry thing cmp with filter isotopee <3 -->
      </section>

      <!-- footer cmp -->
      <cmpFooter/>
    </div>
  </main>
</template>

<script>
import cmpFooter from "../components/Footer/index.vue"
export default {
    components: {
        cmpFooter
    },

    methods: {
        toggleMenu() {
            
        }
    }
}
</script>

<style lang="scss" scoped>
@import "~/assets/scss/abstracts/_mixins.scss";

li {
  list-style: none;
}

.logo {
  position: fixed;
  top: 5%;
  left: 5%;
  @include respond(phone-medium) {
    top: 10%;
    left: 10%;
  }
  @include respond(tab-large) {
    top: 4rem;
    left: 4rem;
  }
}

.navigation-toggle {
  position: fixed;
  z-index: 666;
  padding: 1rem;
  cursor: pointer;
  top: 5%;
  right: 5%;
  transform: translateY(-20%);

  @include respond(phone-medium) {
    top: 10%;
    right: 10%;
  }

  @include respond(tab-large) {
    top: 4rem;
    right: 4rem;
  }

  &__dot {
    width: 0.8rem;
    height: 0.8rem;
    border-radius: 100%;
    background-color: #fff;
  }
}

.landing {
  width: 100%;
  height: 100vh;
  background-position: center;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  
}

.navigation-panel {
  position: fixed;
  top: 0;
  right: 0;
  height: 100vh;
  width: 25%;
  will-change: transform;
  transition: all .25s ease-in-out;

  &--inactive {
    transform: translateX(100%);
  }

  &__wrapper {
    width: 100%;
    height: 100%;
    padding: 4rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
}
</style>


