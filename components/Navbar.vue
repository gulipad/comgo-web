<template>
	<section class="section is-header">
		<div class="container">
      <nav class="navbar">
          <a href="/">
            <img class="image is-96x96" src="../static/logo-3.svg">  
          </a>
        <div class="navbar-item logo">
          <h1 class="nav-title is-size-4 has-text-grey">com<b>go</b></h1>
        </div>
				<div class="navbar-menu">
					<div class="navbar-end">
						<div class="navbar-item main-item"
            v-if="origin=='home'">
							<a href="/#why"
                class="is-link has-text-grey"
                v-smooth-scroll="{duration: 1000, offset: 0}">{{$t('navbar.why')}}</a>
						</div>
						<div class="navbar-item main-item"
            v-if="origin=='home'">
							<a href="/#projects"
                class="is-link has-text-grey"
                v-smooth-scroll="{duration: 2000, offset: 0}">{{$t('navbar.projects')}}</a>
						</div>
            <div class="navbar-item main-item"
            v-if="origin=='home'">
              <a href="/#what"
                class="is-link has-text-grey"
                v-smooth-scroll="{duration: 2000, offset: 0}">{{$t('navbar.how')}}</a>
            </div>
            <div class="navbar-item main-item"
            v-if="origin=='home'">
              <a href="/#action"
                class="is-link has-text-grey"
                v-smooth-scroll="{duration: 2000, offset: 0}">{{$t('navbar.collaborate')}}</a>
            </div>
            <div class="navbar-item main-item"
            v-if="origin!='home'">
              <a href="/"
                class="is-link has-text-grey">{{$t('navbar.back-to-home')}}</a>
            </div>
						<div class="navbar-item">
							<div class="button">
                <a :href= "this.$route.path + '#contact'"
                class="is-link has-text-grey "
                v-smooth-scroll="{duration: 2000, offset: 0}">{{$t('navbar.contact')}}</a>
              </div>
						</div>
            <div class="navbar-item not-main-item">
              <a class="is-brand" href="https://medium.com/@direccion/introducing-comgo-the-common-good-chain-c412088c813e" target="_blank" rel="nofollow">
                <font-awesome-icon :icon="['fab', 'medium-m']"/>
              </a>
            </div>
					</div>
				</div>
			</nav>
		</div>
	</section>
</template>

<script>
  export default {
  props: ['origin'],
  data () {
    return {
    }
  }
}
</script>

<style scoped>
  .not-main-item {
    cursor: pointer;
  }

  .not-main-item:hover {
    color: #7A7A7A;
  }

  .is-brand {
    color: #363636;
  }

  .navbar-end .navbar-item.main-item {
    box-shadow: 0 0 1px rgba(0, 0, 0, 0);
    -webkit-transform: perspective(1px) translateZ(0);
    transform: perspective(1px) translateZ(0);
    -webkit-transition-duration: 0.3s;
    transition-duration: 0.3s;
    -webkit-transition-property: transform;
    transition-property: transform;
    -webkit-transition-timing-function: ease-out;
    transition-timing-function: ease-out;
  }
  .navbar-end .navbar-item.main-item:hover {
    -webkit-transform: translateY(-5px);
    transform: translateY(-5px);
  }
	.shadow.is-purple {
    -webkit-box-shadow: inset 0 -6px 0 rgba(184,107,255,.2);
    box-shadow: inset 0 -6px 0 rgba(184,107,255,.2);
  }

  .shadow.is-warning {
    -webkit-box-shadow: inset 0 -6px 0 rgba(255,221,87,.2);
    box-shadow: inset 0 -6px 0 rgba(255,221,87,.2);
  }

  .shadow.is-danger {
    -webkit-box-shadow: inset 0 -6px 0 rgba(255,74,110,.2);
    box-shadow: inset 0 -6px 0 rgba(255,74,110,.2);
  }

  .shadow.is-turquoise {
    -webkit-box-shadow: inset 0 -6px 0 rgba(36,177,209,.2);
    box-shadow: inset 0 -6px 0 rgba(36,177,209,.2);
  }

  .shadow.is-success {
    -webkit-box-shadow: inset 0 -6px 0 rgba(35,209,153,.2);
    box-shadow: inset 0 -6px 0 rgba(35,209,153,.2);
  }
</style>