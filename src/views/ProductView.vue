<template>
  <div class="product">
    <div v-if="product">
      <div class="product-wrapper">
        <div class="product-image">
          <img :src="product.prodUrl" alt="Product Image" class="img-fluid" />
        </div>
        <div class="product-details">
          <h1>{{ product.prodName }}</h1>
          <p>{{ product.prodDescription }}</p>
          <p class="price">R{{ product.amount }}</p>
        </div>
      </div>
    </div>
    <Loader v-else />
    <Footer />
  </div>
</template>
<script>
import Loader from "@/components/LoaderComp.vue";
import Footer from "@/components/FooterComp.vue";
import { mapState } from "vuex";

export default {
  name: "ProductView",
  components: {
    Loader,
    Footer,
  },
  data() {
    return {
      loading: true,
    };
  },
  computed: {
    ...mapState({
      product: (state) => state.product,
    }),
  },
  methods: {
    fetchProduct() {
      this.$store.dispatch("fetchProduct", this.$route.params.id).then(() => {
        this.loading = false;
      });
    },
  },
  mounted() {
    this.fetchProduct();
  },
};
</script>
<style scoped>
.product {
    padding-top: 12rem;
}
.product-wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 3rem;
  width: 29rem;
  margin: 2rem auto;
  border: 2px solid #1e1c1c;
  padding: 3rem 4rem;
  border-radius: 0.75rem;
  background-color: #7045936c;
  color: rgb(7, 6, 6);
  box-shadow: 10px 10px 50px gray;
}
.product-image {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.product-details {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  text-align: center;
  font-size: 1.2rem;
}
.price {
  font-size: 1.5rem;
  font-weight: 700;
}

@media (max-width: 600px) {
  .product-details {
    text-align: center;
  }
}

@media screen and (max-width: 600px) {
  .product-wrapper {
    width: 100%;
    padding: 1rem;
  }
}
</style>
