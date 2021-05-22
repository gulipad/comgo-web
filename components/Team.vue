<template>
  <section class="section purpose-section is-small">
    <div class="container">
      <div class="columns is-spaced">
        <div data-aos="fade-in" class="column is-one-third">
          <div class="content">
            <h2 class="title-serif is-size-1" v-html="this.$t('team.core-title')"></h2>
          </div>
        </div>
        <div class="column is-half">
          <div class="content">
            <p class="is-size-5 has-text-weight-light"
            v-html="this.$t('team.paragraph')"></p>
          </div>
        </div>
      </div>
      <br> <!-- This is a bit hacky -->
      <div class="columns is-multiline">
        <div data-aos="fade-up" class="column is-half"
        v-for="(data, index) in coreTeam" :key="index">
          <div class="card">  
            <div class="card-content">
              <div class="media">
                <div class="media-left">
                  <figure class="image is-128x128">
                    <img class="is-rounded" :src="data.imgUrl" alt="Placeholder image">
                  </figure>
                </div>
                <div class="media-content">
                  <p class="title is-4">{{data.name}}</p>
                  <p class="subtitle is-6">{{data.position}}</p>
                </div>
                <a v-if="data.linkedinUrl" class="is-brand is-size-3 align-hack is-linkedin" :href="data.linkedinUrl" target="_blank" rel="nofollow">
                  <font-awesome-icon :icon="['fab', 'linkedin']"/>
                </a>
              </div>
              <div class="tags">
              </div>
            </div>
          </div>
        </div>
      </div>
      <br>
      <div class="columns is-spaced">
        <div data-aos="fade-in" class="column is-one-third">
          <div class="content">
            <h2 class="title-serif is-size-1">{{$t('team.advisors-title')}}</h2>
          </div>
        </div>
      </div>
      <div class="columns is-multiline">
        <div data-aos="fade-up" class="column is-half"
        v-for="(data, index) in advisorsTeam" :key="index">
          <div class="card">  
            <div class="card-content">
              <div class="media">
                <div class="media-left">
                  <figure class="image is-128x128">
                    <img class="is-rounded" :src="data.imgUrl" alt="Placeholder image">
                  </figure>
                </div>
                <div class="media-content">
                  <p class="title is-4">{{data.name}}</p>
                  <p class="subtitle is-6">{{data.position}}</p>
                </div>
                <a v-if="data.linkedinUrl" class="is-brand is-size-3 align-hack is-linkedin" :href="data.linkedinUrl" target="_blank" rel="nofollow">
                  <font-awesome-icon :icon="['fab', 'linkedin']"/>
                </a>
              </div>
              <div class="tags">
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- <div data-aos="fade-in" class="level">
        <div class="level-item">
          <img class="image is-64x64" src="../static/mit.png">
        </div>
        <div class="level-item">
          <img class="image is-64x64" src="../static/ironhack.png">
        </div>
        <div class="level-item">
          <img class="image is-64x64" src="../static/airbus.jpeg">
        </div>
        <div class="level-item">
          <img class="image is-64x64" src="../static/nova.png">
        </div>
        <div class="level-item">
          <img class="image is-64x64" src="../static/politecnica.png">
        </div>
      </div> -->
    </div>
  </section>
</template>

<script>
  export default {
    data () {
      return {
        coreTeam: [
          {
            name: this.$t('team.core-team["MANUEL"].name'),
            position: this.$t('team.core-team["MANUEL"].position'),
            linkedinUrl: 'https://www.linkedin.com/in/manuelhurtado25/',
            imgUrl: require('../static/people/manuel.png')
          },
          {
            name: this.$t('team.core-team["ARANCHA"].name'),
            position: this.$t('team.core-team["ARANCHA"].position'),
            linkedinUrl: 'https://www.linkedin.com/in/amartinezitwillbe/',
            imgUrl: require('../static/people/arancha.png')
          },
          {
            name: this.$t('team.core-team["SANACHIT"].name'),
            position: this.$t('team.core-team["SANACHIT"].position'),
            linkedinUrl: '',
            imgUrl: require('../static/people/sanachit.jpg')
          },
          {
            name: this.$t('team.core-team["RAJISH"].name'),
            position: this.$t('team.core-team["RAJISH"].position'),
            linkedinUrl: 'https://www.linkedin.com/in/rajish-rajan-81171b7/',
            imgUrl: require('../static/people/rajish.jpeg')
          }
        ],
      advisorsTeam: [
        {
          name: this.$t('team.advisors-team["JULIUS"].name'),
          position: this.$t('team.advisors-team["JULIUS"].position'),
          linkedinUrl: 'https://www.linkedin.com/in/julius-akinyemi-a41a7512/',
          imgUrl: require('../static/people/julius.png')
        },
        {
          name: this.$t('team.advisors-team["JAVIER"].name'),
          position: this.$t('team.advisors-team["JAVIER"].position'),
          linkedinUrl: 'https://www.linkedin.com/in/javieraguera/',
          imgUrl: require('../static/people/javier.png')
        },
        {
          name: this.$t('team.advisors-team["DEBORAH"].name'),
          position: this.$t('team.advisors-team["DEBORAH"].position'),
          linkedinUrl: 'https://www.linkedin.com/in/deborahsoule/',
          imgUrl: require('../static/people/deborah.png')
        },
        {
          name: this.$t('team.advisors-team["CLAUDIA"].name'),
          position: this.$t('team.advisors-team["CLAUDIA"].position'),
          linkedinUrl: 'https://www.linkedin.com/in/claudiaromoedelman/',
          imgUrl: require('../static/people/claudia.jpeg')
        },
        {
          name: this.$t('team.advisors-team["IGNACIO"].name'),
          position: this.$t('team.advisors-team["IGNACIO"].position'),
          linkedinUrl: 'https://www.linkedin.com/in/imorenopubul/',
          imgUrl: require('../static/people/guli.png')
        }
      ]
      }
    }
  }
</script>

<style scoped>
  
  img.border-hack {
    border-radius: 10px 10px 0 0;
  }

  .align-hack {
    margin-top: -9px;
  }
  
  .is-linkedin:hover {
    color: #0077B5;
  }

  .is-linkedin:hover {
    color: #283E4A;
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

  .card:hover {
    box-shadow: 0 5px 14px rgba(10, 10, 10, 0.3), 0 0 0 0px rgba(10, 10, 10, 0.1);
    -webkit-transform: translateY(-5px);
    transform: translateY(-5px);
  }

  .title-serif {
    font-family: 'Roboto Mono', monospace;
  }

  .columns.is-spaced {
    justify-content: space-between;
  }

  .shadow.is-purple {
      -webkit-box-shadow: inset 0 -6px 0 rgba(184,107,255,.2);
      box-shadow: inset 0 -6px 0 rgba(184,107,255,.2);
  }

  .shadow.is-warning {
    -webkit-box-shadow: inset 0 -6px 0 rgba(255,221,87,.2);
    box-shadow: inset 0 -6px 0 rgba(255,221,87,.2);
  }

  .shadow.is-success {
    -webkit-box-shadow: inset 0 -6px 0 rgba(35,209,153,.2);
    box-shadow: inset 0 -6px 0 rgba(35,209,153,.2);
  }
</style>