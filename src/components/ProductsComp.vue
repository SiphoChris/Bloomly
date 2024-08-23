<template>
  <div class="wrapper">
    <Loader v-if="loading" />
    <section id="products" v-else>
      <div class="preferences d-flex justify-content-center gap-3 mb-5">
        <div id="sort">
          <div class="dropdown">
            <button
              class="btn btn-primary dropdown-toggle"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Sort
            </button>
            <ul class="dropdown-menu">
              <li>
                <a class="dropdown-item" @click="highToLow">High to low</a>
              </li>
              <li>
                <a class="dropdown-item" @click="lowToHigh">Low to high</a>
              </li>
              <li>
                <a class="dropdown-item" @click="ascendingSort">Ascending</a>
              </li>
              <li>
                <a class="dropdown-item" @click="descendingSort">Descending</a>
              </li>
            </ul>
          </div>
        </div>
        <div id="filter">
          <div class="row g-3 align-items-center">
            <div class="col-auto">
              <label for="filter-field" class="col-form-label">Filter</label>
            </div>
            <div class="col-auto">
              <input
                v-model="filterText"
                id="filter-field"
                type="text"
                class="form-control border-2 border-primary"
                placeholder="Search..."
              />
            </div>
          </div>
        </div>
      </div>
      <GridLayout>
        <template v-slot:grid>
          <Card v-for="product in displayedProducts" :key="product.prodID">
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
      filterText: "",
    };
  },
  computed: {
    ...mapState({
      products: (state) => state.products,
    }),
    displayedProducts() {
      let filteredProducts = this.products.filter((product) =>
        product.prodName.toLowerCase().includes(this.filterText.toLowerCase())
      );
      
      return filteredProducts;
    },
  },
  methods: {
    fetchAllProducts() {
      this.$store.dispatch("fetchAllProducts").then(() => {
        this.loading = false;
      });
    },
    ascendingSort() {
      this.products.sort((a, b) => a.prodName.localeCompare(b.prodName));
    },
    descendingSort() {
      this.products.sort((a, b) => b.prodName.localeCompare(a.prodName));
    },
    highToLow() {
      this.products.sort((a, b) => b.amount - a.amount);
    },
    lowToHigh() {
      this.products.sort((a, b) => a.amount - b.amount);
    },

    clearFilter() {
      this.filterText = "";
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

@media screen and (max-width: 390px){
  .preferences{
    flex-direction: column;
    align-items: center;
  }
  .preferences #sort{
    margin-bottom: 1rem;
  }

li, a {
  cursor: pointer;
}
}
</style>
