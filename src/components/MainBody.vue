<script setup>
import Card from './Card.vue'
import CardButton from './CardButton.vue'
import FetchData from './FetchData.vue';
import Loading from './Loading.vue';
defineProps({
   endpoint: String
})
</script>

<template>
   <FetchData :url="endpoint" v-slot="{res, loading}">
      <Loading v-if="loading" />
      <template v-if="res" v-for="result in res" :key="result.id">
         <Card>
            <h4>{{result.cardTitle}}</h4>
            <h1>{{result.cardNum}}</h1>
            <card-button />
            <p>{{result.para1}}</p>
            <br />
            <p>{{result.para2}}</p>
         </Card>
      </template>
   </FetchData>
</template>

<style>
</style>

