<template>
  <section class="section how-section is-small">
    <div class="container">
      <div class="columns is-spaced">
        <div class="column is-one-third">
          <div class="content">
            <h2 class="title-mono is-size-1"
            v-html="this.$t('action.title')"></h2>
          </div>
        </div>
        <div data-aos="fade-in" class="column is-half">
          <div class="content">
            <p class="is-size-5 has-text-weight-light"
            v-html="this.$t('action.paragraph')"></p>
          </div>
          <div class="button is-medium is-primary hero-button">
            <a href="../static/ComGo_Whitepaper.pdf"
            target="_blank"
            class="is-link"
            download>  
            {{$t('action.download-button')}}
            </a>
          </div>
        </div>
      </div>
      <div class="columns is-spaced">
        <div class="column is-one-third">
          <div class="level">
            <div class="card">
              <div class="card-content">
                <div class="media">
                  <div class="media-left">
                    <span class="is-size-2">😇</span>
                  </div>
                  <div class="media-content">
                    <p class="title is-4">{{$t('action.donations.title')}}</p>
                    <p class="subtitle is-6">{{$t('action.donations.subtitle')}}</p>
                  </div>
                </div>
                <div class="content">
                  {{$t('action.donations.paragraph')}}
                </div>
                <div class="button is-medium is-fullwidth is-rounded is-outlined is-main-button">
                  <a href="https://marketplace.comgo.io/pages/auth/register-2"
                  class="is-link"
                  target="_blank">  
                  {{$t('action.donations.button')}}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="column is-one-third">
          <div class="level">
            <div class="card">
              <div class="card-content">
                <div class="media">
                  <div class="media-left">
                    <span class="is-size-2">👩‍💼</span>
                  </div>
                  <div class="media-content">
                    <p class="title is-4">{{$t('action.corporate.title')}}</p>
                    <p class="subtitle is-6">{{$t('action.corporate.subtitle')}}</p>
                  </div>
                </div>
                <div class="content">
                  {{$t('action.corporate.paragraph')}}
                </div>
                <div class="button is-medium is-fullwidth is-rounded is-outlined is-main-button">
                  <a href="/#contact"
                  v-smooth-scroll="{duration: 2000, offset: 0}"
                  class="is-link">  
                  {{$t('action.corporate.button')}}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="column is-one-third">
          <div class="level">
            <div class="card">
              <div class="card-content">
                <div class="media">
                  <div class="media-left">
                    <span class="is-size-2">🤲</span>
                  </div>
                  <div class="media-content">
                    <p class="title is-4">{{$t('action.ngos.title')}}</p>
                    <p class="subtitle is-6">{{$t('action.ngos.subtitle')}}</p>
                  </div>
                </div>
                <div class="content">
                  {{$t('action.ngos.paragraph')}}
                </div>
                <div class="button is-medium is-fullwidth is-rounded is-outlined is-main-button">
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
    </div>
  </section>
</template>

<style scoped>

  .button a {
    color: inherit;
  }
  
  .title-mono {
    font-family: 'Roboto Mono', monospace;
  }

  .is-text-highlighted {
    color: #00d1b2;
  }

  .columns.is-spaced {
    justify-content: space-between;
  }

  .is-main-button:hover {
    background-color: transparent;
    border-color: #00d1b2;
    color: #00d1b2;
  }

  .is-main-button {
    background-color: #00d1b2;
    border-color: #00d1b2;
    color: #fff;
  }

  .shadow.is-turquoise {
    -webkit-box-shadow: inset 0 -6px 0 rgba(36,177,209,.2);
    box-shadow: inset 0 -6px 0 rgba(36,177,209,.2);
  }

</style>