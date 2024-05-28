import { createApp } from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router';
import routes from './router.js';
import './style.css'
import App from './App.vue'

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

createApp(App)
  .use(router)
  .mount('#app')
