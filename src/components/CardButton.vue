<script>
export default {
   setup() {
      const Increment = (e) => {
         console.log(e.target.textContent)
         if (e.target.textContent <= 9) {
            e.target.textContent++
            return
         }
      }
      return {
         Increment
      }
   }
}
</script>

<template>
   <button class="btn" @click="Increment($event)">0</button>
</template>


<style>
</style>
