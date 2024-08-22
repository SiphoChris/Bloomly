<template>
    <div class="card">
      <div class="image_container">
        <slot name="cardImage"></slot>
      </div>
      <slot name="cardTitle"></slot>
      <slot name="cardCTA"></slot>
    </div>
  </template>
  
  <script>
  export default {
    name: 'CardComp',
  };
  </script>

<style src="../assets/css/style.css">
</style>
