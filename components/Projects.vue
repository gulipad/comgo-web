<template>
  <section class="section purpose-section is-small">
    <div class="container">
      <div class="columns is-spaced">
        <div data-aos="fade-in" class="column is-one-third">
          <div class="content">
            <h2 class="title-serif is-size-1">{{$t('projects.title')}}</h2>
            <p class="is-size-5 has-text-weight-light"
            v-html="this.$t('projects.subtitle')"></p>
          </div>
        </div>
        <div data-aos="fade-in" class="column is-half">
          <div class="content">
            <p class="is-size-5 has-text-weight-light"
            v-html="this.$t('projects.paragraph')"></p>
          </div>
        </div>
      </div>
      <br> <!-- This is a bit hacky -->
      <div class="columns is-multiline">
        <div data-aos="fade-up"
        class="column is-one-third"
        v-for="(data, index) in projects" :key="index">
          <div class="card">  
            <div class="card-image">
              <figure class="image is-4by3">
                <img class="border-hack aspect-ratio-hack" :src="data.imgUrl" alt="Placeholder image">
              </figure>
            </div>
            <div class="card-content">
              <div class="media">
                <div class="media-content">
                  <p class="title is-4">{{data.title}}</p>
                  <p class="subtitle is-6">
                    {{data.owner}}
                    <!-- <font-awesome-icon :icon="['far', 'clock']"/> -->
                  </p>
                </div>
              </div>
              <div class="tags">
                <div class="tag is-medium is-light">{{data.categoryTag}}</div>
                <div class="tag is-medium is-info">{{data.countryTag}}</div>
              </div>
              <div class="content">
                {{data.content}}
              </div>
              <a :href="$route.path + '#action'"
              v-smooth-scroll="{duration: 2000, offset: 0}"
              class="button is-medium is-fullwidth is-rounded is-outlined is-link">
                {{$t('projects.visit-button')}}
              </a>
            </div>
          </div>
        </div>
        <div data-aos="fade-up" class="column is-one-third">
          <div class="card is-new-project">
            <div class="card-image">
              <figure class="image is-4by3">
                <img class="border-hack aspect-ratio-hack" src="../static/your-project.png" alt="Placeholder image">
              </figure>
            </div> 
            <div class="card-content">
              <div class="media">
                <div class="media-content">
                  <p class="title is-4">Tu proyecto</p>
                  <p class="subtitle is-6">Aloja tu proyecto social en ComGo</p>
                </div>
              </div>
              <div class="content">
                Si eres una <span class="shadow is-turquoise">organización social</span>, aloja tu proyecto en nuestra plataforma para ofrecer a tus donantes un seguimiento de tus logros. Transparencia, eficiencia y responsabilidad.
              </div>
              <div class="button is-medium is-fullwidth is-rounded is-outlined is-new-card-button">
                <a :href="this.$route.path + 'host-a-project'"
                class="is-link">  
                {{$t('action.ngos.button')}}
                </a>
              </div>
            </div>
          </div>  
        </div>
      </div> 
    </div>
  </section>
</template>

<script>
  export default {
    data () {
      return {
        projects: [
          {
            title: this.$t('projects.items[0].title'),
            owner: this.$t('projects.items[0].owner'),
            content: this.$t('projects.items[0].content'),
            categoryTag: this.$t('tags.healthcare'),
            countryTag: this.$t('tags.cameroon'),
            imgUrl: require('~/static/projects/fundacion_recover.jpg')
          },
          {
            title: this.$t('projects.items[1].title'),
            owner: this.$t('projects.items[1].owner'),
            content: this.$t('projects.items[1].content'),
            categoryTag: this.$t('tags.education'),
            countryTag: this.$t('tags.india'),
            imgUrl: require('~/static/projects/itwillbe.jpg')
          },
          {
            title: this.$t('projects.items[2].title'),
            owner: this.$t('projects.items[2].owner'),
            content: this.$t('projects.items[2].content'),
            categoryTag: this.$t('tags.education'),
            countryTag: this.$t('tags.kenya'),
            imgUrl: require('~/static/projects/kubuka.jpg')
          },
          {
            title: this.$t('projects.items[3].title'),
            owner: this.$t('projects.items[3].owner'),
            content: this.$t('projects.items[3].content'),
            categoryTag: this.$t('tags.women'),
            countryTag: this.$t('tags.spain'),
            imgUrl: require('~/static/projects/fundacion_exit.jpg')
          },
          {
            title: this.$t('projects.items[4].title'),
            owner: this.$t('projects.items[4].owner'),
            content: this.$t('projects.items[4].content'),
            categoryTag: this.$t('tags.healthcare'),
            countryTag: this.$t('tags.spain'),
            imgUrl: require('~/static/projects/orden_de_malta.jpg')
          }
        ]
      }
    }
  }
</script>

<style scoped>
  
  img.aspect-ratio-hack {
    object-fit: cover;
  }

  img.border-hack {
    border-radius: 10px 10px 0 0;
  }

  .card {
    height: 100%;
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

  .title-serif {
    font-family: 'Roboto Mono', monospace;
  }

  .columns.is-spaced {
    justify-content: space-between;
  }

  .shadow.is-turquoise {
    -webkit-box-shadow: inset 0 -6px 0 rgba(0,209,178,.2);
    box-shadow: inset 0 -6px 0 rgba(0,209,178,.2);
  }

</style>