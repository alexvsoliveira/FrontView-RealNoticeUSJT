import Vue from "vue";
import Router from "vue-router";
import Inicio from "./componentes/Inicio";
import Noticia from "./componentes/noticia/Noticia";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      component: Inicio,
    },
    {
      path: "/noticia/:id",
      component: Noticia,
    },
  ],
});
