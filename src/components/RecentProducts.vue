<template>
<div id="recent-products">
    <h1>Recent Products</h1>
    <Loader v-if="loading" />
    <GridLayout v-else>
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
</div>
</template>

<script>
import Card from './CardComp.vue'
import GridLayout from './GridLayout.vue';
import Loader from './LoaderComp.vue';
import { mapState } from "vuex";

export default {
components: {
  Card,
  Loader,
  GridLayout,
},
data() {
    return {
      loading: true,
    };
  },
  computed: {
    ...mapState({
      products: (state) => state.recentProducts,
    }),
  },
  methods: {
    fetchRecentProducts() {
      this.$store.dispatch("fetchRecentProducts").then(() => {
        this.loading = false;
      });
    },
  },
  mounted() {
    this.fetchRecentProducts();
  },
}
</script>

<style scoped>
#recent-products {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 3rem;
  min-height: 100dvh;
  padding-top: 5rem;
}
@media screen and (max-width: 995px) {
    #recent-products {
        margin-bottom: 3rem;
    }
}
</style>