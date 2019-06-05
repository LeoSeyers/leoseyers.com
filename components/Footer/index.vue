<template>
  <footer class="footer bg-darkgray">
    <div class="wrapper">
      <h4 class="c-lightergray fs-s pb-2 ls-s">WEBSITES NETWORK</h4>
      <ul class="c-white fs-m pb-4">
        <li>
          <nuxt-link to="/pro">Commercial showcase</nuxt-link>
        </li>
        <li>
          <a
            href="https://unlightenment.io"
            target="_blank"
            rel="noopener noreferrer"
          >Art-based portfolio</a>
        </li>
        <li>
          <a
            href="https://studio-scale.com"
            target="_blank"
            rel="noopener noreferrer"
          >Digital web studio</a>
        </li>
      </ul>
      <p class="c-gray fs-s">
        Copyright 2019. All rights reserved
        <span>
          <a
            href="https://github.com/LeoSeyers/leoseyers.com"
            target="_blank"
            rel="noopener noreferrer"
          >V1.0</a>
        </span>
      </p>
    </div>
  </footer>
</template>

<style lang="scss">
@import "~/assets/scss/abstracts/_mixins.scss";

footer p span {
  @include respond(tab) {
    position: absolute;
    right: 0;
  }
}
</style>
