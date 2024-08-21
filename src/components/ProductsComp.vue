<template>
  <section id="products">
    <GridLayout>
      <template v-slot:grid>
        <Card
          v-for="product in products"
          :key="product.id"
          :product="product"
        />
      </template>
    </GridLayout>
  </section>
</template>

<script>
import { mapActions } from "vuex";
import GridLayout from "./GridLayout.vue";
import Card from "./CardComp.vue";

export default {
  components: {
    GridLayout,
    Card,
  },
};
</script>
