<script>
export default {

}
</script>


<template>
   <nav>
      <h1>Logo</h1>
      <ul>
         <li>
            <a href="#">Home</a>
            <a href="#">About</a>
            <a href="#">Contact</a>
            <a href="#">Service</a>
         </li>
      </ul>
   </nav>
</template>


<style>
nav {
   position: sticky;
   width: 100%;
   display: grid;
   z-index: 1;
   grid-template-columns: 1fr 0.5fr;
   align-items: center;
   background-color: var(--sidebar-bg-dark);
   padding: 1rem;
   font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
      "Lucida Sans", Arial, sans-serif;
}
nav > h1 {
   color: white;
   text-transform: uppercase;
   letter-spacing: 2px;
}
nav > ul > li {
   display: grid;
   grid-template-columns: 1fr 1fr 1fr 1fr;
   background-color: var(--sidebar-bg-dark);
   grid-gap: 0.3rem;
}
nav > ul > li > a {
   text-decoration: none;
   width: fit-content;
   padding: 0.6em;
   border-radius: 5px;
   background-color: var(--sidebar-bg-light);
   color: white;
   font-weight: 200;
   letter-spacing: 0.1rem;
}
</style>
