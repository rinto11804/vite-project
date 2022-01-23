import {createApp} from 'vue'
import {createRouter, createWebHistory} from 'vue-router'
import App from './App.vue'
import Home from './views/Home.vue'
import Joyful from './views/Joyful.vue'
import store from './store/index.js'

const router = createRouter({
   history: createWebHistory(),
   routes: [
      {path: '/', name: 'Home', component: Home},
      {path: '/joyful', name: 'Joyful', component: Joyful}
   ]
})
createApp(App)
   .use(router)
   .use(store)
   .mount('#app')
