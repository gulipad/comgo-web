<template>
  <section class="section purpose-section is-small">
    <div class="container">
      <div class="columns is-spaced">
        <div data-aos="fade-in" class="column is-one-third">
          <div class="content">
            <h2 class="title-serif is-size-1">{{$t('projects.title')}}</h2>
            <p class="is-size-5 has-text-weight-light"
            v-html="this.$t('projects.subtitle')"></p>
          </div>
        </div>
        <div data-aos="fade-in" class="column is-half">
          <div class="content">
            <p class="is-size-5 has-text-weight-light"
            v-html="this.$t('projects.paragraph')"></p>
          </div>
        </div>
      </div>
      <br> <!-- This is a bit hacky -->
      <div class="columns">
        <div data-aos="fade-up" class="column is-one-third">
          <div class="card">  
            <div class="card-image">
              <figure class="image is-4by3">
                <img class="border-hack" src="../static/grace-humanitas.jpg" alt="Placeholder image">
              </figure>
            </div>
            <div class="card-content">
              <div class="media">
                <div class="media-content">
                  <p class="title is-4">Grace Humanitas School</p>
                  <p class="subtitle is-6">
                    <font-awesome-icon :icon="['far', 'clock']"/> 30 días restantes
                  </p>
                </div>
              </div>
              <div class="tags">
                <div class="tag is-medium is-light">Education</div>
                <div class="tag is-medium is-info">Kenia</div>
              </div>
              <div class="content">
                A school in Kenya to teach yound children from the village. Building the future of their communities, and empowering their youth.
              </div>
              <a href="/" target="_blank" class="button is-medium is-fullwidth is-rounded is-outlined is-link">
                Visita el proyecto
              </a>
            </div>
          </div>
        </div>
        <div data-aos="fade-up" class="column is-one-third">
          <div class="card">
            <div class="card-image">
              <figure class="image is-4by3">
                <img class="border-hack" src="../static/blocks-lite.png" alt="Placeholder image">
              </figure>
            </div>
            <div class="card-content">
              <div class="media">
                <div class="media-content">
                  <p class="title is-4">Kdpn Org</p>
                  <p class="subtitle is-6">
                    <font-awesome-icon :icon="['far', 'clock']"/> 30 días restantes
                  </p>                </div>
              </div>
              <div class="tags">
                <div class="tag is-medium is-light">Healthcare</div>
                <div class="tag is-medium is-info">USA</div>
              </div>
              <div class="content">
                I have no idea what this is. Looks like something about kidney disease prevention awareness. 
              </div>
              <a href="/" target="_blank" class="button is-medium is-fullwidth is-rounded is-outlined is-link">
                Visita el proyecto
              </a>
            </div>
          </div>
        </div>
        <div data-aos="fade-up" class="column is-one-third">
          <div class="card">
            <div class="card-image">
              <figure class="image is-4by3">
                <img class="border-hack" src="../static/mera-parivar.jpg" alt="Placeholder image">
              </figure>
            </div>
            <div class="card-content">
              <div class="media">
                <div class="media-content">
                  <p class="title is-4">Mera Parivar</p>
                  <p class="subtitle is-6">
                    <font-awesome-icon :icon="['far', 'clock']"/> 30 días restantes
                  </p>                </div>
              </div>
              <div class="tags">
                <div class="tag is-medium is-light">Education</div>
                <div class="tag is-medium is-primary">India</div>
              </div>
              <div class="content">
                Educational project for unprivileged children. Based in India, it's goal is to advocate for literacy among children.
              </div>
              <a href="/" target="_blank" class="button is-medium is-fullwidth is-rounded is-outlined is-link">
                Visita el proyecto
              </a>
            </div>
          </div>
        </div>
      </div>
      <div class="columns">
        <div data-aos="fade-up" class="column is-one-third">
          <div class="card new-project">
            <div class="card-image">
              <figure class="image is-4by3">
                <img class="border-hack" src="../static/blocks-for-change.png" alt="Placeholder image">
              </figure>
            </div>
            <div class="card-content">
              <div class="media">
                <div class="media-content">
                  <p class="title is-4">Otro proyecto</p>
                  <p class="subtitle is-6">
                    <font-awesome-icon :icon="['far', 'clock']"/> 30 días restantes
                  </p>                </div>
              </div>
              <div class="tags">
                <div class="tag is-medium is-light">Tag 1</div>
                <div class="tag is-medium is-primary">Tag 2</div>
              </div>
              <div class="content">
                Estaría bien tener algún proyecto más, para validar más el proyecto, o atraer distintas perspectivas a donar.
              </div>
              <a href="/" target="_blank" class="button is-medium is-fullwidth is-rounded is-outlined is-link">
                Visita el proyecto
              </a>
            </div>
          </div>
        </div>
        <div data-aos="fade-up" class="column is-one-third">
          <div class="card is-new-project">
            <div class="card-image">
              <figure class="image is-4by3">
                <img class="border-hack" src="../static/your-project.png" alt="Placeholder image">
              </figure>
            </div> 
            <div class="card-content">
              <div class="media">
                <div class="media-content">
                  <p class="title is-4">Tu proyecto</p>
                  <p class="subtitle is-6">Aloja tu proyecto social en ComGo</p>
                </div>
              </div>
              <div class="content">
                Si eres una <span class="shadow is-turquoise">organización social</span>, aloja tu proyecto en nuestra plataforma para ofrecer a tus donantes un seguimiento de tus logros. Transparencia, eficiencia y responsabilidad.
              </div>
              <div class="button is-medium is-fullwidth is-rounded is-outlined is-new-card-button">
                Aloja tu proyecto
              </div>
            </div>
          </div>  
        </div>
      </div>  
    </div>
  </section>
</template>

<style scoped>
  
  img.border-hack {
    border-radius: 10px 10px 0 0;
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

  .card.is-new-project .is-new-card-button {
    background-color: transparent;
    border-color: #00d1b2;
    color: #00d1b2;
  }

  .card.is-new-project .is-new-card-button:hover {
    background-color: #00d1b2;
    border-color: #00d1b2;
    color: #fff;
  }

  .card:hover {
    box-shadow: 0 5px 14px rgba(10, 10, 10, 0.3), 0 0 0 0px rgba(10, 10, 10, 0.1);
    -webkit-transform: translateY(-5px);
    transform: translateY(-5px);
  }

  .title-serif {
    font-family: 'Roboto Mono', monospace;
  }

  .columns.is-spaced {
    justify-content: space-between;
  }

  .shadow.is-turquoise {
    -webkit-box-shadow: inset 0 -6px 0 rgba(0,209,178,.2);
    box-shadow: inset 0 -6px 0 rgba(0,209,178,.2);
  }

</style>