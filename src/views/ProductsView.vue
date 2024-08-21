<template>
  <div class="products">
    <Products />
    <Footer />
  </div>
</template>
<script>
import Footer from "@/components/FooterComp.vue";
import Products from "@/components/ProductsComp.vue";

export default {
  name: "ProductsView",
  components: {
    Products,
    Footer,
  },
};
</script>
<style scoped></style>
