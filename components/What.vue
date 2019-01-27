<template>
  <section class="section purpose-section is-small">
    <div class="container">
      <div data-aos="fade-in" class="column has-text-centered">
        <div class="content">
          <h2 class="is-title is-size-2"
          v-html="this.$t('what.title')"></h2>
          <p class="is-size-4 has-text-weight-light"
          v-html="this.$t('what.subtitle')"></p>
        </div>
      </div>
      <br>
      <br>
      <div class="container">
        <div class="columns is-centered">
          <div class="vertical-tabs column is-half">
            <div class="vertical-tab" v-for="(data, index) in platformItems" :key="index" :class="{ 'is-active': data.id == selectedPlatformItem }" @click="selectedPlatformItem = data.id">
              <div class="content">
                <h3 class="tab-title">{{data.title}}</h3>
                <p class="tab-content">{{data.content}}</p>
              </div>
              <br v-if="index !== (platformItems.length -1)"> <!-- Mega hack -->
            </div>
          </div>
          <div class="column is-half">
            <div class="image-container">
              <img class="limit-img-size" :src="platformImgSources[selectedPlatformItem]">
            </div>
          </div>
        </div>
      </div>
      <br> <!-- This is a bit hacky -->
    </div>
  </section>
</template>

<script>
  export default {
    data () {
      return {
        selectedPlatformItem: 'MANAGEMENT',
        platformItems: [
          {
            id: 'MANAGEMENT', 
            title: this.$t('what.management.title'),
            content: this.$t('what.management.paragraph')
          },
          {
            id: 'MEASUREMENT',
            title: this.$t('what.measurement.title'),
            content: this.$t('what.measurement.paragraph')
          },
          { 
            id: 'AUDITING',
            title: this.$t('what.auditing.title'),
            content: this.$t('what.auditing.paragraph')
          }
        ],
        platformImgSources: {
          MANAGEMENT: require('~/static/management.png'),
          MEASUREMENT: require('~/static//measurement.png'),
          AUDITING: require('~/static//auditing.png'),
        }
      }
    }
  }
</script>

<style scoped>

  .card {
    box-shadow: 0 5px 14px rgba(10, 10, 10, 0.1), 0 0 0 0px rgba(10, 10, 10, 0.1);
    border-radius: 10px;
  }

  hr.sub-category-underliner {
    height: 1px;
    margin: 0; 
  }

  hr.sub-category-underliner.hr-technologies {
    background-color: rgba(184,107,255,.2);
    height: 1px;
    margin: 0; 
  }

  hr.sub-category-underliner.hr-agents {
    background-color: rgba(36,177,209,.2);
    height: 1px;
    margin: 0; 
  }

  .is-text-highlighted {
    color: #00d1b2;
  }

  .image-container {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  .vertical-tabs {
    padding: 0 0 0 2rem;
    position: relative;
  }

  .vertical-tabs::before {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 4px;
    border-radius: 99em;
    background-color: #f3f3f9;
    content: "";
  }

  .vertical-tab {
    cursor: pointer;
    position: relative;
    opacity: 0.6;
    transition: opacity .2s ease-out;
    -moz-transition: opacity .2s ease-out;
    -webkit-transition: opacity .2s ease-out;
    -o-transition: opacity .2s ease-out;
  }

  .vertical-tab.is-active::before {
    position: absolute;
    top: -2px;
    left: -2rem;
    bottom: -2px;
    width: 4px;
    border-radius: 99em;
    background-color: #00d1b2;
    content: "";
    opacity: 1; 
    transition-duration: 172ms;
    box-sizing: inherit;
  }

  .vertical-tab::before {
    position: absolute;
    top: -2px;
    left: -2rem;
    bottom: -2px;
    width: 4px;
    border-radius: 99em;
    background-color: #00d1b2;
    content: "";
    opacity: 0; 
    transition-duration: 172ms;
    box-sizing: inherit;
  }

  .vertical-tab.is-active,
  .vertical-tab:hover {
    opacity: 1
  }

  .limit-img-size {
    max-width: 420px
  }

  .tab-title,
	.is-title {
    font-family: 'Roboto Mono', monospace;
  }

  .columns.is-spaced {
    justify-content: space-between;
  }

  .shadow.is-turquoise {
    -webkit-box-shadow: inset 0 -6px 0 rgba(36,177,209,.2);
    box-shadow: inset 0 -6px 0 rgba(36,177,209,.2);
  }

</style>