<template>
   <div class="loading_background">
      <div class="loading_loader">
         <svg
            xmlns="http://www.w3.org/2000/svg"
            width="54"
            height="54"
            viewBox="0 0 24 24"
            style="fill: rgba(0, 0, 0, 1);"
         >
            <circle cx="12" cy="20" r="2" />
            <circle cx="12" cy="4" r="2" />
            <circle cx="6.343" cy="17.657" r="2" />
            <circle cx="17.657" cy="6.343" r="2" />
            <circle cx="4" cy="12" r="2.001" />
            <circle cx="20" cy="12" r="2" />
            <circle cx="6.343" cy="6.344" r="2" />
            <circle cx="17.657" cy="17.658" r="2" />
         </svg>
      </div>
   </div>
</template>

<script>
</script>

<style>
.loading_background {
   display: grid;
   place-items: center;
   position: fixed;
   top: 0;
   z-index: 9;
   width: 100%;
   height: 100%;
   background-color: #6a9fb875;
}
.loading_loader > svg {
   animation: rise 3s cubic-bezier(0.52, 0.47, 0.09, 1.04) infinite;
}
@keyframes rise {
   0% {
      transform: rotate(20deg);
   }
   50% {
      transform: rotate(120deg);
   }
   100% {
      transform: rotate(20deg);
   }
}
</style>
