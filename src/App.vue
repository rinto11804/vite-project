<script setup>
import Navbar from './components/Navbar.vue';
import Model from './components/Model.vue';
import {ref} from 'vue';

let modelShow = ref(false);
function openModel() {
   modelShow.value = !modelShow.value
}
</script>

<template>
   <Navbar>
      <svg
         @click="openModel"
         class="menu"
         xmlns="http://www.w3.org/2000/svg"
         width="24"
         height="24"
         viewBox="0 0 24 24"
         style="fill: rgba(0, 0, 0, 1);"
      >
         <path d="M4 6h16v2H4zm4 5h12v2H8zm5 5h7v2h-7z" />
      </svg>
   </Navbar>
   <router-view></router-view>
   <transition name="raise">
      <Model v-show="modelShow" @close="openModel">
         <ul>
            <li>
               <router-link to="/">Home</router-link>
               <router-link to="/joyful">Joyful</router-link>
               <router-link to="/sorrowful">Sorrowful</router-link>
            </li>
         </ul>
      </Model>
   </transition>
</template>

<style>
#app > h3 {
   margin-top: 1rem;
   margin-bottom: 1rem;
   font-size: 1.5rem;
}
.model > ul {
   margin-top: 4rem;
   margin-bottom: 4rem;
}
.model > ul > li {
   display: flex;
   justify-content: center;
   align-items: center;
   flex-direction: column;
   gap: 30px;
}
.model > ul > li > a {
   font-size: 1.1rem;
   color: var(--sencodary);
   font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
      "Lucida Sans", Arial, sans-serif;
   font-weight: bold;
}
.raise-enter-active {
   animation: raise-in 0.4s;
}
.raise-leave-active {
   animation: raise-in 0.4s reverse;
}
@keyframes raise-in {
   0% {
      opacity: 0;
      transform: translateY(-40px);
   }

   100% {
      opacity: 1;
      transform: translateY(0px);
   }
}
</style>
