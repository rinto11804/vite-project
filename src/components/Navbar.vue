<script>
export default {

}
</script>


<template>
   <nav>
      <h1>Logo</h1>
      <svg
         class="menu"
         xmlns="http://www.w3.org/2000/svg"
         width="24"
         height="24"
         viewBox="0 0 24 24"
         style="fill: rgba(0, 0, 0, 1);"
      >
         <path d="M4 6h16v2H4zm4 5h12v2H8zm5 5h7v2h-7z" />
      </svg>
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
