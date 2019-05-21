<template>
  <main>

    <section class="section--landing">
      <div class="wrapper wrapper--tight">
        <nav class="navigation">
          <h1 class="f-serif c-darkgray fs-l">Leo Seyers</h1>
        </nav>
        <h2 class="c-darkgray fs-xl">Full time freelancer.</h2>
        <h3 class="c-darkgray fs-xl">Specialized in fine crafted images <br>and refined websites</h3>
      </div>
    </section>

    <section class="section--commercial bg-darkgray">
      <div class="wrapper wrapper--tight">
        <div class="neg-margin">
          <h4 class="c-gray fs-s ls-s">A — PROFESSIONAL PHOTOGRAPHY</h4>

          <div class="cmp-slider">

            <div class="carousel-pro" ref="flickity_pro">
              <div class="carousel-cell">
                <img src="~assets/images/reportage.jpg" alt="">
              </div>
              <div class="carousel-cell">
                <img src="~assets/images/reportage.jpg" alt="">
              </div>
              <div class="carousel-cell">
                <img src="~assets/images/reportage.jpg" alt="">
              </div>
            </div>


            <!-- <div class="cmp-slider__cell"> </div>
            <div class="cmp-button bg-yellow c-black ls-s">
              <a href="">Explore Portfolio →</a>
            </div> -->
          </div>
        </div>

        <p class="c-lightgray fs-l pb-2">I have a taste for natural, clean and intelligible imagery that arouses
          enthusiasm</p>
        <!-- <p class="c-lightgray fs-l pb-2">I mostly shoot</p> -->
        <ul class="c-gray fs-m pb-6">
          <li>Architecture</li>
          <li>Culinary</li>
          <li>Packshot</li>
          <li>Portrait</li>
        </ul>
      </div>
    </section>

    <section class="section--art">

      <div class="bg-yellow">
        <div class="wrapper">
          <h4 class="c-darkgray fs-s pb-2 ls-s">B — CONTEMPORARY PHOTOGRAPHY</h4>
          <p class="c-black fs-l pb-4">I have a former artistic background, <br> mostly in Photography as a contemporary
            practice</p>
          <a class="mb-6 link-underline ls-s" style="margin-bottom: 30vh;" href="https://unlightenment.io" target="_blank"
            rel="noopener noreferrer">Explore artworks →</a>
        </div>
      </div>

      <div class="bg-white">
        <div class="wrapper wrapper--tight">

          <div class="neg-margin mb-14">
            <div class="cmp-carousel ">
              <div class="cmp-carousel__cell">
              </div>
            </div>
          </div>


          <div style="position:relative">
            <h4 class="c-gray fs-s pb-2 ls-s">C — WEBSITES</h4>
            <p class="c-black fs-l pb-2">I've been crafting websites since 2018 as Studio Scale where I focus on elegant
              and performant website experiences</p>
            <ul class="c-gray fs-m mb-6">
              <li>Strategy</li>
              <li>UX/UI</li>
              <li>Frontend</li>
              <li>Wordpress</li>
            </ul>

            <div class="cmp-scale-logo">
              <a href="https://studio-scale.com" target="_blank" rel="noopener noreferrer">
                <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 400 400"
                  style="enable-background:new 0 0 400 400;" xml:space="preserve">
                  <path id="XMLID_41_"
                    d="M104.6,238c-9.8-13.4-19.8-26.2-28.8-39.5c-11.7-17.3-18.6-36.3-17-57.8c2-26.6,13.5-47.9,36.3-61.5
	c24.2-14.5,48.9-28.6,74.4-40.7c46.3-21.8,93.1-12.6,129.3,23.7c21,21.1,37.9,45.5,53.8,70.6c2.4,3.8,1.1,6.1-2.4,8.1	c-13.7,7.8-27.4,15.7-41.8,24c1.4,2.2,2.8,4.2,4.1,6.2c11.4,17.2,20.4,35.5,24.4,55.9c7.6,38.7-5.5,69.8-37.3,91.7
	c-22.4,15.5-46.7,28.2-70.4,41.7c-12.6,7.2-25.8,13.2-40.3,15.6c-28.4,4.7-52-4.9-72.5-24.2C97.6,334,83,312.7,68.2,291.5	c-4.1-5.9-8.1-11.8-12.1-17.7c-3.1-4.6-2.8-6.2,2.2-9c13.5-7.8,27.1-15.6,40.7-23.5C100.7,240.2,102.6,239.1,104.6,238z M165.4,158
	c1.2,1.7,2.2,3.1,3.1,4.3c18.9,24.4,37.9,48.6,56.5,73.1c11.9,15.8,21.8,32.7,25.4,52.6c1.2,6.9,1.5,14,2.2,21.4	c14.3-8.1,28.4-16,39.5-28.1c9.6-10.4,14.6-22.7,13.7-36.9c-1.4-23.9-12.7-43.7-26.3-62.9c-11.7,6.7-23.1,13.1-34.4,19.8
	c-3.9,2.3-6.5,1.9-9.3-1.8c-11.5-15.1-23.3-30-35-44.9c-3-3.9-6.1-7.8-9.3-11.7C182.6,148,174.2,152.9,165.4,158z M170.2,75.4	c13.5,7.9,24.6,17.8,34,29.7c11,14,21.9,28.1,32.9,42.1c3.7,4.7,7.4,9.3,11.1,14c20.3-11.7,40.2-23.1,61-35.2
	c-10.7-13-20.2-26.2-31.3-37.8C246,54.9,208.7,52.1,170.2,75.4z M170.1,116.9c-9.5-9.5-19.5-16.5-32.6-17	c-31.2-1.3-54,30.4-43.7,60.7c4.1,12.2,11.1,22.7,18.9,32.7c18.7,24.3,37.6,48.4,56.5,72.6c4.7,6,4.7,6,11.2,2.3
	c6.4-3.7,12.8-7.4,19.4-11.2c-1.3-1.7-2-2.8-2.8-3.9c-25-32.2-50-64.5-75-96.7c-5.9-7.6-5.8-8.3,2.4-13	C139.3,134.6,154.4,125.9,170.1,116.9z M215.5,286.3c-2,1.1-3.7,2.1-5.5,3.1c-13.1,7.5-26.3,15-39.3,22.7c-3.9,2.3-6.4,2-9.3-1.8
	c-10.4-13.7-21-27.1-31.5-40.6c-1.4-1.8-2.8-3.5-4.3-5.4c-8.8,5.1-17,9.9-25.3,14.7c10.7,17.2,29.8,40.9,41.5,51.2	c8.3,7.4,17.5,13.2,29,14.3C198.4,347,230.7,322.8,215.5,286.3z" />
                </svg>
                <p class="fs-s link-underline ls-s" style="display:block">Visit Studio →</p>
              </a>
            </div>
          </div>



        </div>
      </div>

    </section>

    <footer class="footer bg-darkgray">
      <div class="wrapper">
        <h4 class="c-lightgray fs-s pb-2 ls-s">WEBSITES NETWORK</h4>
        <ul class="c-white fs-m pb-4">
          <li><a href="https://leoseyers.com/pro" target="_blank" rel="noopener noreferrer">Commercial showcase</a></li>
          <!-- nuxt link -->
          <li><a href="https://unlightenment.io" target="_blank" rel="noopener noreferrer">Art-based portfolio</a></li>
          <li><a href="https://studio-scale.com" target="_blank" rel="noopener noreferrer">Digital web studio</a></li>

        </ul>
        <p class="c-gray fs-s">Copyright 2019. All rights reserved
          <span><a href="https://github.com/LeoSeyers/leoseyers.com" target="_blank" rel="noopener noreferrer" npm
              install vue-flickity --save>V1.0</a></span></p>
      </div>

    </footer>
  </main>
</template>

<script>
  export default {

    head() {
      return {
        title: 'Leo Seyers',
        script: [{
          src: 'https://unpkg.com/flickity@2/dist/flickity.pkgd.min.js'
        }],
        link: [{
          rel: 'stylesheet',
          href: 'https://unpkg.com/flickity@2/dist/flickity.min.css'
        }]
      }
    },

    mounted() {


      var flkty = new Flickity(this.$refs.flickity_pro, {
        prevNextButtons: false,
        pageDots: false,
        wrapAround: true
      });

    }

  }

</script>


<style lang="scss">
  @import "~/assets/scss/abstracts/_mixins.scss";

  main {
    font-family: 'Roboto', sans-serif;
  }

  h1 {
    margin-top: 15vh;
    margin-bottom: 10vh;
  }

  h3 {
    margin-bottom: 35vh;
  }

  p {

    @include respond(tab-large) {
      max-width: 40rem
    }

  }

  li {
    list-style: none;
    margin-bottom: .5rem;
  }

  footer p span {
    @include respond(tab) {
      position: absolute;
      right: 0;
    }
  }

  .link-underline {
    display: inline-block;
    padding-bottom: 0.3rem;
    border-bottom: solid 1px currentColor;
  }

  .neg-margin {
    margin-top: -20vh;

    @include respond(desktop) {
      margin-top: -35vh;
    }
  }

  .cmp-slider {
    position: relative;
    width: 100%;
    margin-top: 5vh;
    margin-bottom: 5vh;

    @include aspect-ratio(16/9);

    @media (min-aspect-ratio: 16/9) {
      @include aspect-ratio(21/9);
    }

    @include respond(tab-large) {
      margin-left: -12.5%;
      width: 125%;
    }

  }

  .cmp-carousel {
    position: relative;
    width: 100%;

    background-color: #f7f7f7;
    margin-top: 5vh;
    margin-bottom: 5vh;

    @include aspect-ratio(16/9);

    &__cell {
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;

      background-image: url('~assets/images/gisements7.jpg');
      background-size: cover;
      background-position: center;
    }
  }

  .cmp-button {
    position: absolute;
    bottom: -2rem;
    right: 50%;
    transform: translateX(50%);
    transition: all .25s ease;

    a {
      display: block;
      padding: 1rem 1.5rem;
    }

    &:hover {
      background-color: #fff;
    }

    @include respond(tab-large) {
      transform: translateX(0%);
      bottom: -6rem;
      right: 2rem;
    }
  }

  .cmp-scale-logo {
    width: 10rem;
    text-align: center;
    margin: 0 auto 4rem;


    @include respond(tab-large) {
      margin: 0;
      position: absolute;
      top: 0;
      right: 0;
    }

    svg {
      width: 100%;
      height: 10rem;
      color: #ffd352;
      fill: currentColor;
      border: solid .7rem currentColor;
      margin-bottom: 0.5rem;
      transition: all .25s ease;

      &:hover {
        color: #252525
      }
    }
  }

  .carousel-pro {
    position: absolute;
    display: block;
    height: 100%;
    width: 100%;

    .carousel-cell {
      width: 66%;
      height: 100%;

      &.is-selected img {
        transform: scale(1);
      }

      img {
        display: block;
        width: 95%;
        height: auto;
        margin: auto;
        transition: opacity 0.3s, transform 0.3s, filter 0.3s;
        transform: scale(0.75);
      }
    }

    .flickity-viewport.is-pointer-down {
      .is-selected img {
        transform: scale(0.9);
      }
    }

  }

</style>
