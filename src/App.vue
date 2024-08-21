<template>
  <Nav />
  <router-view/>
</template>

<script>
import Nav from './components/NavComp.vue';
export default{
  name: 'AppComp',
  components: {
    Nav,
  }
}
</script>

<style src="./assets/css/style.css">
</style>
