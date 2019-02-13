<template>
  <div>
    <host-a-project-hero></host-a-project-hero>
    <host-contact id="contact"></host-contact>
    <hello-footer></hello-footer>
  </div>
</template>

<script>
import HostAProjectHero from '~/components/HostAProjectHero.vue'
import HostContact from '~/components/HostContact.vue'
import HelloFooter from '~/components/HelloFooter.vue'

export default {
  components: {
  	HostAProjectHero,
    HostContact,
    HelloFooter
  }
}
</script>

<style>

</style>

