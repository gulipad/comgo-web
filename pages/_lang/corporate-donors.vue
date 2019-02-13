<template>
  <div>
    <corporate-donors-hero></corporate-donors-hero>
    <corporate-donors-contact id="contact"></corporate-donors-contact>
    <hello-footer></hello-footer>
  </div>
</template>

<script>
import CorporateDonorsHero from '~/components/CorporateDonorsHero.vue'
import CorporateDonorsContact from '~/components/CorporateDonorsContact.vue'
import HelloFooter from '~/components/HelloFooter.vue'

export default {
  components: {
    CorporateDonorsHero,
    CorporateDonorsContact,
    HelloFooter
  }
}
</script>

<style>

</style>

