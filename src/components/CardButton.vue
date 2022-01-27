<script setup>
import {ref} from "vue";
const count = ref(0);
const Increment = () => {
   if (count.value < 10)
      count.value++;
}
</script>

<template>
   <button class="card-button" @click="Increment">{{count}}</button>
</template>

<style>
.card-button {
   width: 3.2rem;
   height: 3.2rem;
   padding: 0.5rem;
   border-radius: 50%;
   background-color: var(--secondary);
   border: none;
   box-shadow: 3px 4px 8px #292925b0;
   color: white;
   font-size: 1.5rem;
   font-weight: 600;
   font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
      "Lucida Sans", Arial, sans-serif;
}
</style>
