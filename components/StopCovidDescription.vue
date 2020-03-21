<template>
  <section class="section how-section is-small">
    <div class="container">
      <div class="columns is-spaced">
        <div class="column is-half">
          <div class="content">
            <h2 class="title-mono is-size-4"
            v-html="this.$t('stop-covid-description.title')"></h2>
          </div>
          <div class="content">
            <h2 class="title-mono is-size-4"
            v-html="this.$t('stop-covid-description.subtitle')"></h2>
          </div>
        </div>
        
        <div class="column is-half">
          <div class="content">
                <p class="is-size-5 has-text-weight-light"
                v-html="this.$t('action.paragraph')"></p>
          </div>
          <div class="button is-medium is-primary hero-button">
                <a href="https://drive.google.com/open?id=1OVA3rC2KSxqiRRGCUsKlhP30EsBfDDZ_"
                target="_blank"
                class="is-link"
                download>  
                {{$t('action.download-button')}}
                </a>
          </div>
            
        </div>
        
      </div>    
    </div>
  </section>
</template>

<style>

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