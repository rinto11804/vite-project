<script>
import {ref} from "vue"
export default {
   setup() {
      const count = ref(0)
      const Increment = () => {
         if (count.value < 10)
            count.value++;
      }
      return {count, Increment}
   }
}
</script>

<template>
   <button @click="Increment">{{count}}</button>
</template>

<style>
</style>
