<template>
  <footer class="footer bg-darkgray">
    <div class="wrapper">
      <h4 class="c-lightergray fs-s pb-2 ls-s">WEBSITES NETWORK</h4>
      <ul class="c-white fs-m pb-4">
        <li>
          <nuxt-link to="/pro">
            <span class="line"></span>Commercial showcase
          </nuxt-link>
        </li>
        <li>
          <a href="https://unlightenment.io" target="_blank" rel="noopener noreferrer">
            <span class="line"></span>Art-based portfolio
          </a>
        </li>
        <li>
          <a href="https://studio-scale.com" target="_blank" rel="noopener noreferrer">
            <span class="line"></span>Digital web studio
          </a>
        </li>
      </ul>
      <p class="c-gray fs-s">
        Copyright 2019. All rights reserved
        <span class="version">
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

<style lang="scss" >
footer .version {
  position: absolute;
  right: 0;
}

footer .line {
  display: inline-block;
  padding: 0;
  width: 0rem;
  height: 1px;
  background-color: #fff;
  transform: translateY(-0.35rem);
  will-change: width, margin;
  transition: all 0.35s ease-in-out;
}

footer a:hover {
  .line {
    margin-right: 1rem;
    width: 1.2rem;
  }
}
</style>
