<script setup>
const emit = defineEmits(["close"])
function closeModel() {
   emit("close")
}
</script>

<template>
   <div class="backdrop" @click.self="closeModel">
      <div class="model">
         <slot />
      </div>
   </div>
</template>

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
   background-color: #66666652;
}
.model {
   width: clamp(10rem, 16rem, 20rem);
   height: fit-content;
   padding: 1rem;
   border-radius: 10px;
   background-color: var(--primary);
   backdrop-filter: blur(14px);
   border: 2px solid #7fa6b8;
}
.model > svg {
   background-color: var(--secondary);
   border-radius: 50%;
}
</style>
