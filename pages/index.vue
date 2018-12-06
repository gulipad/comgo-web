<template>
  <div>
    <!-- <navbar></navbar> -->
    <hero></hero>
    <why id="purpose"></why>
    <horizontal-divider></horizontal-divider>  
    <participants></participants>
    <horizontal-divider></horizontal-divider>  
    <projects id="projects"></projects>
    <horizontal-divider></horizontal-divider>  
    <what id="what"></what>
    <horizontal-divider></horizontal-divider>
    <action id="action"></action>
    <horizontal-divider></horizontal-divider>
    <contact id="contact"></contact>
    <!-- <horizontal-divider></horizontal-divider> -->
    <!-- <team id="team"></team> -->
    <hello-footer></hello-footer>
  </div>
</template>

<script>
import Navbar from '~/components/Navbar.vue'
import Hero from '~/components/Hero.vue'
import Participants from '~/components/Participants.vue'
import Why from '~/components/Why.vue'
import Action from '~/components/Action.vue'
import Purpose from '~/components/Purpose.vue'
import HorizontalDivider from '~/components/HorizontalDivider.vue'
import What from '~/components/What.vue'
import Projects from '~/components/Projects.vue'
import Contact from '~/components/Contact.vue'
import Team from '~/components/Team.vue'
import HelloFooter from '~/components/HelloFooter.vue'

export default {
  components: {
    Navbar,
    Hero,
    Participants,
    Purpose,
    Why,
    Action,
    HorizontalDivider,
    What,
    Projects,
    Contact,
    Team,
    HelloFooter
  }
}
</script>

<style>

</style>

