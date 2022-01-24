<script setup>
import {ref} from "vue";
const count = ref(0);
const Increment = () => {
   if (count.value < 10)
      count.value++;
}
</script>

<template>
   <button @click="Increment">{{count}}</button>
</template>

<style>
</style>
