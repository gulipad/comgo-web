<template>
	<section class="hero is-fullheight">
    <div class="hero-head">
      <navbar origin="host-a-project"></navbar>
    </div>
		<div class="hero-body">
	    <div class="container center-hack">
        <div class="columns is-vcentered">
          <div class="column is-two-thirds">
            <div class="content">
              <h2 class="title-serif is-size-2">{{$t('host-hero.title')}}<br>
              </h2>
              <p class="hello has-text-grey is-size-4 has-text-weight-light"> {{$t('host-hero.subtitle')}}</p>
            </div>
            <div data-aos="fade-in">
              <div class="button is-medium is-primary hero-button">
                <a :href="this.$route.path + '#contact'"
                class="is-link"
                v-smooth-scroll="{duration: 1000, offset: 0}">  
                {{$t('hero.primary-button')}}
                </a>
              </div>
              <div class="button is-medium hero-button">
                <a href="https://marketplace.comgo.io/pages/auth/login-2"
                class="is-link"
                target="_blank">  
                {{$t('host-hero.secondary-button')}}
                </a>
              </div>
            </div>
          </div>
          <div class="column is-one-third is-hidden-mobile"> 
            <div class="card is-new-project">
            <div class="card-image">
              <figure class="image is-4by3">
                <img class="border-hack" src="../static/your-project.png" alt="Placeholder image">
              </figure>
            </div> 
            <div class="card-content">
              <div class="media">
                <div class="media-content">
                  <p class="title is-4">{{$t('host-hero.project.title')}}</p>
                  <p class="subtitle is-6">{{$t('host-hero.project.subtitle')}}</p>
                </div>
              </div>
              <div class="content">
                {{$t('host-hero.project.paragraph')}}
              </div>
            </div>
          </div>
          </div>
        </div>
	    </div>
		</div>
    <div class="hero-foot">
      <br>
      <horizontal-divider></horizontal-divider>
    </div>
	</section>
</template>

<script>
import Navbar from '~/components/Navbar.vue'
import HorizontalDivider from '~/components/HorizontalDivider.vue'

export default {
  components: {
    Navbar,
    HorizontalDivider
  },
  data () {
    return {
      typerData: this.$t('hero.typerData')
    }
  }
}
</script>

<style scoped>

.center-hack {
  margin-top: -1.5rem;
}

.title-serif {
  font-family: 'Roboto Mono', monospace;
}

.vue-typer .custom.char {
  color: #363636 ;
}

.hero-button {
  margin: 10px 10px 0 0;
}

.is-link {
  color: inherit
}

.shadow.is-turquoise {
  -webkit-box-shadow: inset 0 -6px 0 rgba(0,209,178,.2);
  box-shadow: inset 0 -6px 0 rgba(0,209,178,.2);
}

img.border-hack {
  border-radius: 10px 10px 0 0;
}

.card {
  box-shadow: 0 5px 14px rgba(10, 10, 10, 0.1), 0 0 0 0px rgba(10, 10, 10, 0.1);
  border-radius: 10px;
  -webkit-transform: translateZ(0);
  transform: translateZ(0);
  -webkit-transition-duration: 0.3s;
  transition-duration: 0.3s;  
  -webkit-transition-property: transform;
  transition-property: all;
  -webkit-transition-timing-function: ease-out;
  transition-timing-function: ease-out;
}

.card.is-new-project .is-new-card-button {
  background-color: transparent;
  border-color: #00d1b2;
  color: #00d1b2;
}

.card.is-new-project .is-new-card-button:hover {
  background-color: #00d1b2;
  border-color: #00d1b2;
  color: #fff;
}

.card:hover {
  box-shadow: 0 5px 14px rgba(10, 10, 10, 0.3), 0 0 0 0px rgba(10, 10, 10, 0.1);
  -webkit-transform: translateY(-5px);
  transform: translateY(-5px);
}

	
</style>