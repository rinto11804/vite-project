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
      const result = ref(null);
      let modelShow = ref(false);

      fetch("https://demo1api.herokuapp.com/api/pray")
         .then(res => res.json())
         .then(data => result.value = data)
      console.log(result)
      const openModel = () => {
         modelShow.value = !modelShow.value
      }
      return {result, modelShow, openModel}
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
   <Card></Card>
   <Card></Card>
   <Card></Card>
   <Card></Card>
   <Model v-if="modelShow" @close="openModel" />
</template>

<style>
</style>
