<template>
  <section class="section purpose-section is-small">
    <div class="container">
      <div data-aos="fade-in" class="column has-text-centered">
        <div class="content">
          <h2 class="title-serif is-size-2"
          v-html="this.$t('why.title')"></h2>
          <p class="is-size-4 has-text-weight-light"
          v-html="this.$t('why.paragraph')"></p>
        </div>
      </div>
      <br>
      <br>
      <div data-aos="fade-up" class="columns has-text-centered">
        <div class="column is-one-third">
          <div class="card">
            <div class="card-content">
              <div class="is-size-2">🔍</div>
              <h3 class="is-card-title has-text-dark has-text-weight-normal is-size-4">{{$t('why.transparency.title')}}</h3>
              <br>
              <div class="title is-size-5 has-text-weight-light">{{$t('why.transparency.paragraph')}}</div>
            </div>
          </div>
        </div>
        <div class="column is-one-third">
          <div class="card">
            <div class="card-content">
              <div class="is-size-2">👐</div>
              <h3 class="is-card-title has-text-dark has-text-weight-normal is-size-4">{{$t('why.responsibility.title')}}</h3>
              <br>
              <div class="title is-size-5 has-text-weight-light">{{$t('why.responsibility.paragraph')}}</div>
            </div>
          </div>
        </div>
        <div class="column is-one-third">
          <div class="card">
            <div class="card-content">
              <div class="is-size-2">📊</div>
              <h3 class="is-card-title has-text-dark has-text-weight-normal is-size-4">{{$t('why.efficiency.title')}}</h3>
              <br>
              <div class="title is-size-5 has-text-weight-light">{{$t('why.efficiency.paragraph')}}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style>

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