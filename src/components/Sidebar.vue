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
nav > h1 {
   margin-bottom: 5rem;
}
nav > ul > li {
   display: flex;
   flex: 1;
   flex-direction: column;
   justify-content: space-evenly;
}
li > a {
   padding: 1rem;
   background-color: var(--sidebar-bg-light);
   margin-bottom: 0.5rem;
}
li > a:hover {
   padding: 1rem;
   background-color: var(--sidebar-bg-dark);
   margin: 0.1rem;
}
nav {
   color: white;
   background-color: var(--sidebar-bg-dark);
   float: left;
   width: -2rem;
   position: fixed;
   z-index: 1;
   top: 0;
   left: 0;
   bottom: 0;
   padding: 0.5em;
   transition: 0.3s ease;
   display: flex;
   flex-direction: column;
}
nav :hover {
   width: 15rem;
}
</style>
