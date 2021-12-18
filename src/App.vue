<script>
import Model from './components/Model.vue'
export default {
   components: {
      Model
   },
   data() {
      return {
         header: "Sign up for giveaway",
         text: "Grap your swag",
         showModel: false
      }
   },
   methods: {
      toggleModel() {
         this.showModel = !this.showModel
      }
   }
}
</script>

<template>
   <h1>Hello Vue</h1>
   <Model v-show="showModel" :header="header" :text="text" theme="sale" @close="toggleModel" />
   <button @click="toggleModel">openModel</button>
</template>

<style>
#app {
   font-family: Avenir, Helvetica, Arial, sans-serif;
   -webkit-font-smoothing: antialiased;
   text-align: center;
   color: #243343;
}
</style>
