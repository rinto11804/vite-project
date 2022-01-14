<template>
   <div class="backdrop" @click.self="closeModel">
      <div class="model">
         <slot />
      </div>
   </div>
</template>

<script>
export default {
   emits: ['close'],
   methods: {
      closeModel() {
         this.$emit('close')
      }
   }
}
</script>

<style>
.backdrop {
   display: grid;
   place-items: center;
   position: fixed;
   top: 0;
   z-index: 30;
   width: 100%;
   height: 100%;
   backdrop-filter: blur(4px);
   background-color: #ffffff0a;
}
.model {
   width: 20rem;
   height: 30rem;
   padding: 2rem;
   border-radius: 10px;
   background-color: #a2e3fe;
}
</style>
