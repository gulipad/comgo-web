<template>
  <div>
    <stop-covid-hero></stop-covid-hero>
    <resume id="resume"></resume>
    <stop-covid-description></stop-covid-description>
    <horizontal-divider></horizontal-divider>
    <stop-covid-contact id="contact"></stop-covid-contact>
    <hello-footer></hello-footer>
  </div>
</template>

<script>
import StopCovidHero from '~/components/StopCovidHero.vue'
import StopCovidContact from '~/components/StopCovidContact.vue'
import StopCovidDescription from '~/components/StopCovidDescription.vue'
import HorizontalDivider from '~/components/HorizontalDivider.vue'
import HelloFooter from '~/components/HelloFooter.vue'
import Resume from '~/components/Resume.vue'


export default {
  components: {
    StopCovidHero,
    Resume,
    StopCovidContact,
    HelloFooter,
    StopCovidDescription,
    HorizontalDivider
  }
}
</script>

