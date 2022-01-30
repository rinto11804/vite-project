import {createApp} from 'vue'
import {createRouter, createWebHistory} from 'vue-router'
import App from './App.vue'
import Home from './views/Home.vue'
import Joyful from './views/Joyful.vue'
import Sorrowful from './views/Sorrowful.vue'

const router = createRouter({
   history: createWebHistory(),
   routes: [
      {path: '/', name: 'Home', component: Home},
      {path: '/joyful', name: 'Joyful', component: Joyful},
      {path: '/sorrowful', name: 'Sorrowful', component: Sorrowful}
   ]
})
createApp(App)
   .use(router)
   .mount('#app')
