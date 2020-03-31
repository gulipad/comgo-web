<template>
	<div v-if="isOpen" class="notification has-text-centered is-warning">
    <p v-html="this.$t('warning-message')"></p>
    <button @click="isOpen = false" class="delete">
    </button>
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