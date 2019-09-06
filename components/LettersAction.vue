<template>
  <section class="section how-section is-small">
    <div class="container">
      <div class="columns is-spaced">
        <div class="column is-one-third">
          <div class="content">
            <h2 class="title-mono is-size-1"
            v-html="this.$t('letters-action.title')"></h2>
          </div>
        </div>
        <div class="column is-half">
          <div class="content">
            <p class="is-size-5 has-text-weight-light"
            v-html="this.$t('letters-action.paragraph')"></p>
          </div>
        </div>
      </div>
      <br>
      <div class="columns is-spaced is-multiline">
        <div v-for="(data, index) in letters" :key="index" class="column is-one-third">
          <div class="card">
            <div class="card-content card-content-hack">
              <div class="media">
                <div class="media-left">
                  <span class="is-size-2">📨</span>
                </div>
                <div class="media-content">
                  <p class="title is-4">{{data.title}}</p>
                </div>
              </div>
            </div>
            <div class="card-button-hack">
              <div class="button is-medium is-fullwidth is-rounded is-outlined is-main-button">
                <a :href="data.url"
                class="is-link"
                target="_blank">  
                {{$t('letters-action.button')}}
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
        letters: [
          {
            title: this.$t('letters.letter01.title'),
            url: 'https://drive.google.com/open?id=1fRXTzdRSNYVyWvL90hG82F58uSxr4bWh'
          },{
            title: this.$t('letters.letter02.title'),
            url: 'https://drive.google.com/open?id=14qMy_cxnjawsFNdtBAO50r78sKn1OxOM'
          },{
            title: this.$t('letters.letter03.title'),
            url: 'https://drive.google.com/open?id=1niTdB0gUWiCL8uYK-qV4RjNa-T7Q00CC'
          },
          {
            title: this.$t('letters.letter04.title'),
            url: 'https://drive.google.com/open?id=1Hkr58Kl6vvTCktguhc8stw_fzFQB0LC9'
          },{
            title: this.$t('letters.letter05.title'),
            url: 'https://drive.google.com/open?id=1TH1SdnK3uuJWpibQoOYvbfjF-R3GTwTA'
          },{
            title: this.$t('letters.letter06.title'),
            url: 'https://drive.google.com/open?id=1hOrB4sDZU9u_0zSA2sZqchLL0JFqbywn'
          },
          {
            title: this.$t('letters.letter07.title'),
            url: 'https://drive.google.com/open?id=16b67fPm2xNVq58NogM1Fd1l7SoUOW2I8'
          },{
            title: this.$t('letters.letter08.title'),
            url: 'https://drive.google.com/open?id=1SmIi0AsBRFEHbdJc85lYCY2a0AGLVvZa'
          },{
            title: this.$t('letters.letter09.title'),
            url: 'https://drive.google.com/open?id=1RUbQFMAVli8gQZnFJFAS6zUUWaq2ZB7M'
          },
          {
            title: this.$t('letters.letter10.title'),
            url: 'https://drive.google.com/open?id=1F0HrID7OCrbsAHkQ81TMAbElOseOUvX5'
          },{
            title: this.$t('letters.letter11.title'),
            url: 'https://drive.google.com/open?id=1lDAhlHLZDwBKYvYW0o0VM4KdHbEj8YQz'
          },{
            title: this.$t('letters.letter12.title'),
            url: 'https://drive.google.com/open?id=1mucm-qKhgUBjVupIU7QvOc5M5jTl99yv'
          },
          {
            title: this.$t('letters.letter13.title'),
            url: 'https://drive.google.com/open?id=1TlGmE8sySJvRLnP3gfOMC2oILiJR24rG'
          },{
            title: this.$t('letters.letter14.title'),
            url: 'https://drive.google.com/open?id=1A_ZSPaFmRFzf2JIVxqqCUMuhKiTfP2Jf'
          },{
            title: this.$t('letters.letter15.title'),
            url: 'https://drive.google.com/open?id=19e4ZQTxTup6_Q5akEp8vQcovb9rLPziJ'
          },
        ]
      }
    }
  }
</script>

<style scoped>

  .card {
    display: flex;
    flex-direction: column;
    height: 100%;
    box-shadow: 0 5px 14px rgba(10, 10, 10, 0.1), 0 0 0 0px rgba(10, 10, 10, 0.1);
    border-radius: 10px;
  }

  .card-content-hack {
    display: flex;
    flex-direction: column;
    height: 100%
  }

  .card-button-hack {
    padding: 0 1.5em 1.5em
  }

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