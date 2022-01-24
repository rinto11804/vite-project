<script setup>
import {defineComponent} from 'vue';
import Card from '../components/Card.vue'
import CardButton from '../components/CardButton.vue'
defineComponent({
   Card,
   CardButton
})
</script>

<template>
   <Card>
      <CardButton />
   </Card>
</template>

<style>
</style>
