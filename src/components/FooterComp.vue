<template>
  <footer>
    <p>Copyrights Reserved</p>
    <p>{{currentYear}}</p>
  </footer>
</template>

<script>
import { currentYear } from '../utils/index.js';
export default {
data() {
  return {
    currentYear: currentYear()
  }
}
}
</script>

<style src="../assets/css/style.css">

</style>