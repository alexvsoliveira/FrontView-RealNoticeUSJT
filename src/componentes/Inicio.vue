<template>
	<div id="app">
    <div class="jumbotron" style="margin-top: 56px;">
      <div class="container">
        <h1 class="display-3">USJT Noticias</h1>
        <p>Este Projeto é referente ao trabalho de D1 para materia de Desenvolvimento de Sistemas Web
          <br>Alunos:<br>
          Alex Victor Souza de Oliveira RA:819154560<br>
          Lucas Lopes Guimarães RA:819162764

        </p>
      </div>
    </div>

    <div class="container">
      <!-- Example row of columns -->
      <div class="row">
        <div class="col-md-4 mb-3" v-for="noticia in noticias" v-bind:key="noticia.id"> 
          <h2>{{ noticia.titulo }}</h2>
          <p>{{ noticia.descricao }}</p>
          <p><a class="btn btn-secondary" @click="irPara(noticia.id)" role="button">Ver Mais</a></p>
        </div>
      </div>
      <hr>

    </div> <!-- /container -->
	</div>
</template>

<script>
export default {
  data() {
    return {
      teste: "fadsfasd",
      noticias: [],
      noticia: {
        id: "",
        titulo: "",
        descricao: "",
        texto: "",
      },
    };
  },
  created() {
    this.$http("ListarNoticias.do")
      .then((res) => {
        this.noticias = res.data;
      })
      .catch(function(error) {
        console.log(error);
      });
  },
  methods: {
    irPara(id) {
      this.$router.push("/noticia/" + id);
    },
  },
};
</script>
