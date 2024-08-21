<template>
  <div id="home">
    <Hero />
    <Footer />
  </div>
</template>

<script>
import Hero from "@/components/HeroComp.vue";
import Footer from "@/components/FooterComp.vue";
import Loader from "@/components/LoaderComp.vue";

export default {
  name: "HomeView",
  components: {
    Hero,
    Footer,
    Loader,
  },
};
</script>
<style src="../assets/css/style.css"></style>
