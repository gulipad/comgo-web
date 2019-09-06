<template>
  <div>
    <letters-hero></letters-hero>
    <letters-action id="letters"></letters-action>
    <hello-footer></hello-footer>
  </div>
</template>

<script>
import LettersHero from '~/components/LettersHero.vue'
import LettersAction from '~/components/LettersAction.vue'
import HelloFooter from '~/components/HelloFooter.vue'

export default {
  components: {
    LettersHero,
    LettersAction,
    HelloFooter
  }
}
</script>

<style>

</style>

