<template>
  <section class="section purpose-section is-small">
    <div class="container">
      <div class="columns is-spaced">
        <div class="column is-one-third">
          <div class="content">
            <h2 class="title-serif is-size-1">{{$t('projects.title')}}</h2>
            <p class="is-size-5 has-text-weight-light"
            v-html="this.$t('projects.subtitle')"></p>
          </div>
        </div>
        <div class="column is-half">
          <div class="content">
            <p class="is-size-5 has-text-weight-light"
            v-html="this.$t('projects.paragraph')"></p>
          </div>
        </div>
      </div>
      <br> <!-- This is a bit hacky -->
      <div class="columns is-multiline">
        <div
        class="column is-one-third"
        v-for="(data, index) in projects" :key="index">
          <div class="card">  
            <div class="card-image">
              <figure class="image is-4by3">
                <img class="border-hack aspect-ratio-hack" :src="data.imgUrl" alt="Placeholder image">
              </figure>
            </div>
            <div class="card-content card-content-hack">
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
            </div>
            <div class="card-content">
              <a v-if="data.idProject"
              target="_blank" 
              :href="'https://marketplace.comgo.io/pages/projectProfile?projectId=' + data.idProject"
              class="button is-medium is-fullwidth is-rounded is-outlined is-link">
                {{$t('projects.visit-button')}}
              </a>
              <a v-if="!data.idProject"
              :href="$route.path + '#action'"
              v-smooth-scroll="{duration: 1000, offset: 0}"
              class="button is-medium is-fullwidth is-rounded is-outlined is-link">
                {{$t('projects.visit-button')}}
              </a>
            </div>
          </div>
        </div>
        <div class="column is-one-third">
          <div class="card is-new-project">
            <div class="card-image">
              <figure class="image is-4by3">
                <img class="border-hack aspect-ratio-hack" src="../static/your-project.png" alt="Placeholder image">
              </figure>
            </div> 
            <div class="card-content card-content-hack">
              <div class="media">
                <div class="media-content">
                  <p class="title is-4">{{$t('projects.your-project-title')}}</p>
                  <p class="subtitle is-6">{{$t('projects.your-project-subtitle')}}</p>
                </div>
              </div>
              <div class="content" v-html="this.$t('projects.your-project-content')">
                
              </div>
            </div>
            <div class="card-content">
              <div class="button is-medium is-fullwidth is-rounded is-outlined is-new-card-button">
                <a :href="this.$route.path + '/host-a-project'"
                class="is-link">  
                {{$t('projects.host-button')}}
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
            title: this.$t('projects.items["RECOVER"].title'),
            owner: this.$t('projects.items["RECOVER"].owner'),
            content: this.$t('projects.items["RECOVER"].content'),
            categoryTag: this.$t('tags.healthcare'),
            countryTag: this.$t('tags.cameroon'),
            imgUrl: require('~/static/projects/fundacion_recover.jpg'),
            idProject: 'Project1542887397074'
          },
          {
            title: this.$t('projects.items["ITWILLBE"].title'),
            owner: this.$t('projects.items["ITWILLBE"].owner'),
            content: this.$t('projects.items["ITWILLBE"].content'),
            categoryTag: this.$t('tags.education'),
            countryTag: this.$t('tags.india'),
            imgUrl: require('~/static/projects/itwillbe.jpg'),
            idProject: 'Project1544522636024'
          },
          {
            title: this.$t('projects.items["KUBUKA"].title'),
            owner: this.$t('projects.items["KUBUKA"].owner'),
            content: this.$t('projects.items["KUBUKA"].content'),
            categoryTag: this.$t('tags.education'),
            countryTag: this.$t('tags.kenya'),
            imgUrl: require('~/static/projects/kubuka.jpg'),
            idProject: 'Project1551519398530'
          },
          {
            title: this.$t('projects.items["EXIT"].title'),
            owner: this.$t('projects.items["EXIT"].owner'),
            content: this.$t('projects.items["EXIT"].content'),
            categoryTag: this.$t('tags.women'),
            countryTag: this.$t('tags.spain'),
            imgUrl: require('~/static/projects/fundacion_exit.jpg'),
            idProject: 'Project1543485797466'
          },
          {
            title: this.$t('projects.items["HOMELESS"].title'),
            owner: this.$t('projects.items["HOMELESS"].owner'),
            content: this.$t('projects.items["HOMELESS"].content'),
            categoryTag: this.$t('tags.inclusion'),
            countryTag: this.$t('tags.spain'),
            imgUrl: require('~/static/projects/homeless_entrepreneur.jpg'),
            idProject: 'Project1546025883208'
          },
          {
            title: this.$t('projects.items["FARMACEUTICOS"].title'),
            owner: this.$t('projects.items["FARMACEUTICOS"].owner'),
            content: this.$t('projects.items["FARMACEUTICOS"].content'),
            categoryTag: this.$t('tags.healthcare'),
            countryTag: this.$t('tags.uganda'),
            imgUrl: require('~/static/projects/farmaceuticos.jpg'),
            idProject: 'Project1543994367214'
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
    display: flex;
    flex-direction: column;
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

  .card-content-hack {
    display: flex;
    flex-direction: column;
    height: 100%
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