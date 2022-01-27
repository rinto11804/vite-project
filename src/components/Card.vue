<script setup>
</script>

<template>
   <div class="card">
      <slot />
   </div>
</template>


<style>
@import url("https://fonts.googleapis.com/css2?family=Baloo+Chettan+2:wght@500&family=Fira+Sans:wght@100;300&display=swap");
#app > .card {
   display: grid;
   font-family: "Fira Sans", sans-serif;
   place-items: center;
   width: 25rem;
   min-height: 34rem;
   height: fit-content;
   padding-bottom: 2rem;
   padding-top: 1rem;
   margin-bottom: 3rem;
   backdrop-filter: blur(8px);
   background-color: #fff;
   border-radius: 26px;
   box-shadow: 35px 35px 68px 0px rgba(145, 192, 255, 0.5),
      inset -8px -8px 16px 0px rgba(145, 192, 255, 0.6),
      inset 0px 11px 28px 0px rgb(255, 255, 255);
}
</style>
