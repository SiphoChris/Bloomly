<template>
  <div class="wrapper">
    <Loader v-if="loading" />
    <section id="products" v-else>
      <GridLayout>
        <template v-slot:grid>
          <Card v-for="product in products" :key="product.prodID">
            <template v-slot:cardImage>
              <img
                :src="product.prodUrl"
                alt="Product Image"
                class="product-image img-fluid"
                loading="lazy"
              />
            </template>
            <template v-slot:cardTitle>
              <div class="title">
                <span>{{ product.prodName }}</span>
              </div>
            </template>
            <template v-slot:cardCTA>
              <div class="action">
                <div class="price">
                  <span>R{{ product.amount }}</span>
                </div>
                <router-link
                  :to="{ name: 'product', params: { id: product.prodID } }"
                >
                  <button class="cart-button">
                    <span>View Details</span>
                  </button>
                </router-link>
              </div>
            </template>
          </Card>
        </template>
      </GridLayout>
    </section>
  </div>
</template>

<script>
import GridLayout from "./GridLayout.vue";
import Card from "./CardComp.vue";
import Loader from "./LoaderComp.vue";
import { mapState } from "vuex";

export default {
  components: {
    GridLayout,
    Loader,
    Card,
  },
  data() {
    return {
      loading: true,
    };
  },
  computed: {
    ...mapState({
      products: (state) => state.products,
    }),
  },
  methods: {
    fetchAllProducts() {
      this.$store.dispatch("fetchAllProducts").then(() => {
        this.loading = false;
      });
    },
  },
  mounted() {
    this.fetchAllProducts();
  },
};
</script>
<style scoped>
.wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 12rem;
}

</style>
