<template>
  <section class="section purpose-section is-small">
    <div class="container">
      <div class="card">
        <div class="card-content"> 
          <h3 class="is-card-title has-text-dark has-text-weight-normal is-size-4"><img class="limit-img-size" :src="platformImgSources[resume1]" style="vertical-align: middle;">{{$t('resume.how-work.title')}}</h3>
          <br>
          <p class="is-size-5 has-text-weight-light has-text-justified" v-html="this.$t('resume.how-work.paragraph')"></p>
          
        </div>
      </div>
      <br>
      <div data-aos="fade-up" class="columns has-text-justified">
        <div class="column is-one-two">
          <div class="card">
            <div class="card-content">
              <h3 class="is-card-title has-text-dark has-text-weight-light is-size-4 "><img class="limit-img-size" :src="platformImgSources[resume2]" style="vertical-align: middle">{{$t('resume.how-support.title')}}</h3> 
              <br>
               <p class="is-size-5 has-text-weight-light has-text-justified" v-html="this.$t('resume.how-support.paragraph')"></p>
              <div class="columns">
                <div class="column is-half ">
                  <br>
                  <br>
                  <div class="image-container has-text-centered">
                    <a href="https://https://until.un.org/" target="_blank"><img class="limit-img-size" :src="platformImgSources[until]"></a>
                  </div>
                </div>
                <div class="column is-half "> 
                  <br>      
                  <div class="image-container has-text-centered">
                    <a href="http://www.fundaciones.org/" target="_blank"><img class="limit-img-size" :src="platformImgSources[aef]"></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="column is-one-two">
          <div class="card">
            <div class="card-content"> 
              <h3 class="is-card-title has-text-dark has-text-weight-light is-size-4 "><img class="limit-img-size" :src="platformImgSources[resume3]" style="vertical-align: middle">{{$t('resume.how-help.title')}}</h3>
              <br>
              <p class="is-size-5 has-text-weight-light has-text-justified" v-html="this.$t('resume.how-help.paragraph')"></p>
              <br>
              <div class="buttons">
                <div class="button is-primary">
                  <a :href= "this.$route.path + '#contact'"
                  class="is-link  "
                  v-smooth-scroll="{duration: 2000, offset: 0}">{{$t('navbar.contact')}}</a>
                </div>
              </div> 
              <br>
              <br>  
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style>
.hero-button {
  margin: 10px 10px 0 0;
}
.shadow.is-turquoise {
  -webkit-box-shadow: inset 0 -6px 0 rgba(0,209,178,.2);
  box-shadow: inset 0 -6px 0 rgba(0,209,178,.2);
}

.is-text-highlighted {
  color: #00d1b2;
}

.is-card-title {
  font-family: 'Roboto Mono', monospace;
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

</style>
<style scoped>

  .hidden {
    display: none;
  }

  .title-mono {
    font-family: 'Roboto Mono', monospace;
  }

  .shadow.is-purple {
      -webkit-box-shadow: inset 0 -6px 0 rgba(184,107,255,.2);
      box-shadow: inset 0 -6px 0 rgba(184,107,255,.2);
  }

  .shadow.is-warning {
    -webkit-box-shadow: inset 0 -6px 0 rgba(255,221,87,.2);
    box-shadow: inset 0 -6px 0 rgba(255,221,87,.2);
  }

  .shadow.is-danger {
    -webkit-box-shadow: inset 0 -6px 0 rgba(255,74,110,.2);
    box-shadow: inset 0 -6px 0 rgba(255,74,110,.2);
  }

  .shadow.is-turquoise {
    -webkit-box-shadow: inset 0 -6px 0 rgba(36,177,209,.2);
    box-shadow: inset 0 -6px 0 rgba(36,177,209,.2);
  }

  .shadow.is-success {
    -webkit-box-shadow: inset 0 -6px 0 rgba(35,209,153,.2);
    box-shadow: inset 0 -6px 0 rgba(35,209,153,.2);
  }
</style>
<script>
  export default {
    data () {
      return {
        resume1: 'resume1',
        resume2: 'resume2',
        resume3: 'resume3',
        until: 'until',
        aef: 'aef',
        
        platformImgSources: {
          resume1: require('~/static/resume-1.png'),
          resume2: require('~/static//resume-2.png'),
          resume3: require('~/static//resume-3.png'),
          until: require('~/static//UNTIL.png'),
          aef: require('~/static//aef2.jpg'),
        }
      }
    }
  }
</script>