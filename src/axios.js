import Vue from "vue";
import axios from "axios";

axios.defaults.baseURL = "http://localhost:8080/GerenciadorRealNews/";
axios.defaults.headers.post["Access-Control-Allow-Origin"] = "*";
Vue.use({
  install(Vue) {
    Vue.prototype.$http = axios;
  },
});
