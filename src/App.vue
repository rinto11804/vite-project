<script>
import Card from './components/Card.vue'
export default {
   components: {
      Card
   }
}
</script>
<template>
   <Card></Card>
   <Card card-width="30rem" card-height="20rem"></Card>
</template>

<style>
#app > h1 {
   font-family: "Fira Sans", sans-serif;
}
.shape {
   width: 7rem;
   height: 7rem;
   border-radius: 50%;
   background: var(--gradient);
   position: absolute;
   top: 0.5rem;
   left: 0.5rem;
}
</style>
