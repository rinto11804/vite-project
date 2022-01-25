<script setup>
</script>

<template>
   <div class="card">
      <slot />
   </div>
</template>


<style>
#app > .card {
   width: 20rem;
   height: 30rem;
   margin-bottom: 3rem;
   backdrop-filter: blur(8px);
   background-color: #fff;
   border-radius: 26px;
   box-shadow: 35px 35px 68px 0px rgba(145, 192, 255, 0.5),
      inset -8px -8px 16px 0px rgba(145, 192, 255, 0.6),
      inset 0px 11px 28px 0px rgb(255, 255, 255);
}
</style>
