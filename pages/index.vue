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
          <h4 class="c-gray fs-s">A — PROFESSIONAL PHOTOGRAPHY</h4>
          <div class="cmp-slider">
              <div class="cmp-slider__cell"> </div>
            <div class="cmp-button bg-yellow c-black">
              <a href="">Explore Portfolio</a>
            </div>
          </div>
        </div>

        <p class="c-lightgray fs-l pb-2">I have a taste for natural, clean and intelligible imagery that arouses enthusiasm
        </p>
        <p class="c-lightgray fs-l pb-2">I mostly shoot</p>
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
          <h4 class="c-darkgray fs-s pb-2">B — CONTEMPORARY PHOTOGRAPHY</h4>
          <p class="c-black fs-l pb-2">I have a former artistic background, mostly in Photography as a contemporary practice</p>
          <a class="pb-6" href="">EXPLORE WEBSITE</a>
        </div>
      </div>

      <div class="bg-white">
        <div class="wrapper wrapper--tight">
          <div class="cmp-carousel">
            <div class="cmp-carousel__cell">
              
            </div>

          </div>
          <h4>C — WEBSITES</h4>
          <p>I've been crafting websites since 2018 as Studio Scale where I focus on elegant and performant website
            experiences</p>
          <p>I do</p>
          <ul>
            <li>STRATEGY</li>
            <li>UX/UI</li>
            <li>FRONT END</li>
            <li>WORDPRESS</li>
          </ul>

          <div class="cmp-scale-logo">
            <!--  image svg  -->
            <a href="">Visit websites</a>
          </div>

        </div>
      </div>

    </section>

    <footer class="footer bg-darkgray">
      <div class="wrapper">
        <h4>Websites Network</h4>
        <ul>
          <li><a href="">Commercial showcase</a></li>
          <li><a href="">Art-based portfolio</a></li>
          <li><a href="">Digital web studio</a></li>

        </ul>
        <p>Copyright 2019. All rights reserved <span>V1.0</span></p>
      </div>

    </footer>

  </main>



</template>


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
    margin-bottom: 30vh;
  }

  p {

    @include respond(tab-large) {
        max-width: 40rem
    }
    
  }

  li {
    list-style: none;
  }

  .neg-margin {
    margin-top: -20vh;
  }

  .cmp-slider {
    position: relative;
    width: 100%;
    background-color: rgb(201, 201, 201);
    margin-top: 5vh;
    margin-bottom: 5vh;
   
   @include aspect-ratio(16/9);

    &__cell {
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      
      background-image: url('~assets/images/reportage.jpg'); 
      background-size: cover;
      background-position: center;
    }
  }

  .cmp-carousel {
    position: relative;
    width: 100%;
  
    background-color: rgb(201, 201, 201);
    margin-top: 5vh;
    margin-bottom: 5vh;
    
    @include aspect-ratio(16/9);
    
    &__cell {
      position: relative;
      width: 100%;
      height: 100%;
      background-image: url('~assets/images/gisements7.jpg'); 
      background-size: cover;
      background-position: center;
    }
  }

  .cmp-button {
    position: absolute;
    bottom: 0;
    right: 50%;
    transform: translateX(50%);
    padding: 1rem 1.5rem;

    @include respond(tab-large) {
      transform: translateX(0%);
      right: 0;
    }
  }

</style>
