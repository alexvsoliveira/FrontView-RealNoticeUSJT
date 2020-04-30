<template>
	<div id="app">
   <div class="jumbotron" style="margin-top: 56px;">
      <div class="container">
        <h1 class="display-3">{{ noticia.title }}</h1>
        <p>{{ noticia.descricao }}</p>
      </div>
    </div>
    <div class="container">
      <div class="row">
        <div class="col-md-12">
            {{ noticia.texto }}
        <hr>
        </div>
        <div class="col-md-12">
          <h1>Comentarios:</h1>
          <div class="col-md-12 mb-3" v-for="comentario in noticia.comentarios" v-bind:key="comentario.id"> 
            <h3>{{ comentario.nome }}</h3>
            <p>{{ comentario.texto }}</p>
            <hr>
          </div>
        </div>
        <div class="col-md-12">
          <h2>Faça o seu comentário:</h2>
          <div class="col-md-12 mb-3">
            <label for="firstName">Nome</label>
            <input type="text" class="form-control" id="firstName" placeholder="" value="" required="">
            <div class="invalid-feedback">
              Valid first name is required.
            </div>
          </div>
          <div class="col-md-12 mb-3">
            <label for="firstName">Comentário</label>
            <textarea type="text" class="form-control" id="content" placeholder="" value="" required=""></textarea>
            <div class="invalid-feedback">
              Valid first name is required.
            </div>
          </div>
          <hr>
          <button class="btn btn-primary btn-lg btn-block" @click="cadastrarComentario()">Enviar Comentário</button>
        </div>
      </div>
	  </div>
	</div>
</template>

<script>
export default {
  data() {
    return {
      comentario: {
        id: "",
        nome: "",
        texto: "",
      },
      noticia: {
        id: this.$route.params.id,
        title: "",
        descricao: "",
        texto: "",
        comentarios: "",
      },
    };
  },
  created() {
    this.$http("Noticia.do?id=" + this.noticia.id).then((res) => {
      this.noticia.title = res.data.titulo;
      this.noticia.descricao = res.data.descricao;
      this.noticia.texto = res.data.texto;
      this.noticia.comentarios = res.data.comentario;
    });
  },
  methods: {
    cadastrarComentario() {
      this.$http.get("Noticia.do?id=" + this.noticia.id+'&nome='+$("#firstName").val()+'&texto='+$("#content").val()+'&idNoticia='+this.noticia.id).then((res) => {
        window.location.reload()
      });
    },
  },
};
</script>
