<template>
  <div id="home">
    <Hero />
    <RecentProducts id="recent-products" />
    <Footer />
  </div>
</template>

<script>
import Hero from "@/components/HeroComp.vue";
import RecentProducts from "@/components/RecentProducts.vue";
import Footer from "@/components/FooterComp.vue";
import Loader from "@/components/LoaderComp.vue";

export default {
  name: "HomeView",
  components: {
    Hero,
    RecentProducts,
    Footer,
    Loader,
  },
};
</script>
<style src="../assets/css/style.css">

</style>
