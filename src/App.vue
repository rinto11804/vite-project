<script>
import Card from './components/Card.vue'
import Navbar from './components/Navbar.vue'
import Model from './components/Model.vue'
import {ref} from 'vue';
export default {
   components: {
      Card,
      Navbar,
      Model
   },
   setup() {
      const results = ref(null);
      let modelShow = ref(false);
      let currentSlide = ref('joyful');
      let currentCard = currentSlide.value;
      fetch(`https://demo1api.herokuapp.com/api/pray/${currentCard}`)
         .then(res => res.json())
         .then(data => results.value = data)
      const openModel = () => {
         modelShow.value = !modelShow.value
      }
      return {results, modelShow, openModel, currentSlide}
   }
}
</script>
<template>
   <Navbar @click="openModel">
      <svg
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
   <h3>{{results[0].cardTitle}}</h3>
   <Card v-for="joy in results">
      <h1>{{joy.cardNum}}</h1>
      <p>{{joy.para1}}</p>
      <br />
      <p>{{joy.para2}}</p>
   </Card>
   <transition name="bounce">
      <Model v-show="modelShow" @close="openModel">
         <ul>
            <li>
               <a href="#">Home</a>
               <a href="#">Works</a>
               <a href="#">About</a>
               <a href="#">Contact</a>
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
.bounce-enter-active {
   animation: bounce-in 0.5s;
}
.bounce-leave-active {
   animation: bounce-in 0.5s reverse;
}
@keyframes bounce-in {
   0% {
      transform: scale(0);
   }
   50% {
      transform: scale(1.2);
   }
   100% {
      transform: scale(1);
   }
}
</style>
