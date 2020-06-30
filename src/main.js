import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import { routes } from './routes';

Vue.use(VueRouter);

export const eventBus = new Vue();
 
const router = new VueRouter({
  mode: 'history',
  routes: routes
})

new Vue({
  el: '#app',
  router: router,
  render: h => h(App)
})
