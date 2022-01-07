<script>
import Card from './components/Card.vue'
import Sidebar from './components/Sidebar.vue'
export default {
   components: {
      Card,
      Sidebar
   }
}
</script>
<template>
   <Sidebar />
   <Card></Card>
   <Card card-width="30rem" card-height="20rem"></Card>
</template>

<style>
#app > h1 {
   font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
      Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
}
</style>
