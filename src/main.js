import Vue from 'vue';
import SimpleVueValidation from 'simple-vue-validator';
import App from './App.vue';
import router from './router/index';
import store from './store';

Vue.use(SimpleVueValidation);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
