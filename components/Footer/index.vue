<template>
    <footer>
        <div class="wrapper">
            <p>© 2019 – Fotoscope <span>Handcrafted by <a href="https://studio-scale.com/">Studio Scale</a></span></p>
        </div>
    </footer>
</template>

<style lang="scss">
@import "~/assets/scss/abstracts/_mixins.scss";

footer {
    background-color: #232323;
    color: white;
    font-weight: lighter;
    @include font-size(s); 

    .wrapper  {
        padding: 2.5rem 1.5rem;
        

        @include respond(tab-large) {
            padding: 3.5rem 0;
        }

        p {
            color: #ccc;
        }

        span {
            
            display: block;
            margin-top: 1rem;

            @include respond(phone-medium) {
                padding-left: 3rem;
                margin-top: 0;                
                display: inline-block;
            }

            @include respond(phone-large) {
                padding-left: 4rem;
            }
        }

        a {
            padding-bottom: .2rem;
            border-bottom: solid 1px grey;
            letter-spacing: 0.05rem;
        }

        
    }
}
</style>
