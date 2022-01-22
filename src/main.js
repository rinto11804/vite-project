import {createApp} from 'vue'
import {createRouter, createWebHistory} from 'vue-router'
import App from './App.vue'
import Home from './views/Home.vue'
import Work from './views/Joyful.vue'
import store from './store/index.js'

const router = createRouter({
   history: createWebHistory(),
   routes: [
      {path: '/', name: 'Home', component: Home},
      {path: '/joyful', name: 'Work', component: Work}
   ]
})
createApp(App)
   .use(router)
   .use(store)
   .mount('#app')
