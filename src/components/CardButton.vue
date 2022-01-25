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
   box-shadow: 2px 2px 10px #2e2e22f1;
   color: white;
   font-size: 1.5rem;
   font-weight: 600;
   font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
      "Lucida Sans", Arial, sans-serif;
}
</style>
