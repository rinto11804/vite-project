<script>
export default {

}
</script>


<template>
   <nav>
      <h1>Logo</h1>
      <slot />
   </nav>
</template>


<style>
nav {
   position: sticky;
   top: 0;
   display: flex;
   width: 100%;
   justify-content: space-between;
   align-self: center;
   background-color: var(--navbar-back);
   backdrop-filter: blur(20px);
   padding: 1rem;
   font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
      "Lucida Sans", Arial, sans-serif;
   z-index: 10;
}
nav > h1 {
   color: var(--secondary);
   text-transform: uppercase;
   letter-spacing: 2px;
}
</style>
