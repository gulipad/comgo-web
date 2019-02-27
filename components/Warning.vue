<template>
	<div v-if="isOpen" class="notification has-text-centered is-warning">
    <button @click="isOpen = false" class="delete"></button>
    {{$t('warning-message')}}
  </div>
</template>

<script>

export default {
  data () {
    return {
      isOpen: true
    }
  }
}
</script>

<style scoped>
	
</style>