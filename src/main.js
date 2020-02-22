import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import BingoCard from './components/BingoCard'
import Admin from './components/Admin'

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    { path: '', component: BingoCard },
    { path: '/admin', component: Admin },
  ],
  mode: 'history'
});

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
