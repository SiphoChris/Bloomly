<template>
  <div class="products">
    <Products />
    <Footer id="footer"/>
  </div>
</template>
<script>
import Products from "@/components/ProductsComp.vue";
import Footer from "@/components/FooterComp.vue";

export default {
  name: "ProductsView",
  components: {
    Products,
    Footer,
  },
};
</script>
<style scoped>
.products{
    min-height: 100dvh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 3rem;
}

#footer{
    width: 100%;
}
</style>
