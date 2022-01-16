<template>
   <div class="backdrop">
      <div class="model">
         <svg
            @click.self="closeModel"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            style="fill: rgba(0, 0, 0, 1); transform:scale(1.2);float: right;"
         >
            <path
               d="m16.192 6.344-4.243 4.242-4.242-4.242-1.414 1.414L10.535 12l-4.242 4.242 1.414 1.414 4.242-4.242 4.243 4.242 1.414-1.414L13.364 12l4.242-4.242z"
            />
         </svg>
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
   width: clamp(10rem, 16rem, 20rem);
   height: fit-content;
   padding: 1rem;
   border-radius: 10px;
   background-color: var(--primary);
   backdrop-filter: blur(14px);
   border: 2px solid #7fa6b8;
}
</style>
