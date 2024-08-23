<template>
    <div class="grid-container">
      <slot name="grid"></slot>
    </div>
  </template>
  
  <script>
  
  export default {
    name: "GridLayout",
  };
  </script>
  
  <style scoped>
  .grid-container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 5rem;
    justify-items: center;
  }
  
  @media (max-width: 990px) {
    .grid-container {
      grid-template-columns: repeat(2, 1fr);
      gap: 3rem;
    }
  }
  
  @media (max-width: 640px) {
    .grid-container {
      grid-template-columns: 1fr;
    }
  }
  </style>
  