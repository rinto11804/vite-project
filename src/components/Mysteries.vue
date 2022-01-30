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
      <Loading v-show="loading" />
      <template v-show="res" v-for="(result,idx) in res" :key="idx">
         <Card>
            <h4>{{result.cardTitle}}</h4>
            <div class="card_main">
               <h1>{{idx + 1}}</h1>
               <img :src="result.imageUrl" />
               <card-button />
            </div>
            <p>{{result.para1}}</p>
            <p>{{result.para2}}</p>
            <p>{{result.lower_end}}</p>
         </Card>
      </template>
   </FetchData>
</template>

<style>
.card > h4 {
   font-size: 1.2rem;
   margin-bottom: 1rem;
}
.card_main > h1 {
   font-size: 2.3rem;
}
.card_main {
   display: flex;
   gap: 2rem;
   margin-bottom: 1rem;
   flex-direction: row;
   justify-content: center;
}
.card_main > img {
   border-radius: 10px;
   object-fit: fill;
   width: 12rem;
   height: 15rem;
}
.card > p {
   font-size: 0.72rem;
   font-weight: 700;
   margin-bottom: 0.6rem;
   width: 19rem;
   text-align: center;
}
</style>

