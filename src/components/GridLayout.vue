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
    gap: 16px;
    padding: 16px;
  }
  
  @media (max-width: 768px) {
    .grid-container {
      grid-template-columns: repeat(2, 1fr);
    }
  }
  
  @media (max-width: 480px) {
    .grid-container {
      grid-template-columns: 1fr;
    }
  }
  </style>
  