<template>
	<section class="hero is-fullheight">
    <div class="hero-head">
      <navbar></navbar>
    </div>
		<div class="hero-body">
	    <div class="container center-hack">
        <div class="columns is-vcentered">
          <div class="column is-half">
            <div class="content">
              <h2 class="title-serif is-size-2">Impacto social. <br>
                <vue-typer
                :text='["Transparente.","Eficiente.", "Responsable."]'
                :repeat='1'
                erase-style='backspace'
                :erase-delay= '50'
                ></vue-typer></h2>
              <p class="hello has-text-grey is-size-4 has-text-weight-light"> Generamos confianza en el impacto social que ya estás creando.</p>
            </div>
            <div data-aos="fade-in">
                <div class="button is-medium is-primary hero-button">
                  Aloja un Proyecto
                </div>
                <div class="button is-medium hero-button">
                  Dona Responsablemente
                </div>
            </div>
          </div>
          <div class="column is-half is-hidden-mobile"> 
            <img src="../static/school.png" class="image">
          </div>
        </div>
	    </div>
		</div>
    <div class="hero-foot">
      <br>
      <horizontal-divider></horizontal-divider>
    </div>
	</section>
</template>

<script>
import Navbar from '~/components/Navbar.vue'
import HorizontalDivider from '~/components/HorizontalDivider.vue'

export default {
  components: {
    Navbar,
    HorizontalDivider
  }
}
</script>

<style scoped>

.center-hack {
  margin-top: -1.5rem;
}

.title-serif {
  font-family: 'Roboto Mono', monospace;
}

.vue-typer .custom.char.typed {
  color: #363636;
}

.hero-button {
  margin: 10px 10px 0 0;
}

.shadow.is-turquoise {
  -webkit-box-shadow: inset 0 -6px 0 rgba(0,209,178,.2);
  box-shadow: inset 0 -6px 0 rgba(0,209,178,.2);
}

	
</style>