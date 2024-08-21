<template>
  <Vue3Lottie class="flower-animation"  :animationData="FlowerJSON" />
</template>

<script>
import { Vue3Lottie } from "vue3-lottie";
import FlowerJSON from "../assets/flower.json";

export default {
  components: {
    Vue3Lottie,
  },
  data() {
    return {
      FlowerJSON,
    };
  },
};
</script>

<style scoped>
.flower-animation {
  height: 300px; 
  width: 300px;  
}

@media (max-width: 600px) {
  .flower-animation {
    height: 150px;
    width: 150px;
  }
}
</style>
