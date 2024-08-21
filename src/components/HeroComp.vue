<template>
  <section class="hero-container">
    <div id="wrapper">
      <div class="hero-text">
        <h1>{{ brand }}</h1>
        <p>{{ description }}</p>
      </div>
      <div id="hero-img">
        <LottieFlower />
      </div>
    </div>
    <div id="cta">
      <button id="cta-btn" @click="scrollToProducts">Shop Now</button>
    </div>
  </section>
</template>

<script>
import LottieFlower from "./LottieFlower.vue";
export default {
  components: {
    LottieFlower,
  },
  data() {
    return {
      brand: "Bloomly",
      description:
        "Discover the perfect bouquet for any occasion at Bloomly, your go-to online flower shop.",
    };
  },
  methods: {
    scrollToProducts() {
      const productsSection = document.getElementById("products");
      if (productsSection) {
        productsSection.scrollIntoView({ behavior: "smooth" });
      }
    },
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Fira+Sans:wght@100;200;300;400;500;600;700;800;900&family=Pacifico&display=swap");

.hero-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  gap: 5rem;
  height: 85vh;
}

.hero-container > #wrapper {
  display: flex;
  gap: 8rem;
  align-items: center;
}

#cta-btn {
  background-color: #5d3fd3;
  color: #fff;
  border: none;
  padding: 1rem 2rem;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1.2rem;
  font-weight: bold;
}

#cta-btn:hover {
  background-color: #fff;
  color: #5d3fd3;
}

h1 {
  font-size: 5rem;
  font-family: "Pacifico", cursive;
  margin-bottom: 2.5rem;
}

p {
  width: 40ch;
  font-family: "cursive", sans-serif;
  font-size: 1.5rem;
  color: #5d3fd3;
  font-weight: bold;
}

@media (max-width: 600px) {
  .hero-container {
    height: 75vh;
  }

  h1 {
    font-size: 3rem;
  }

  p {
    font-size: 1rem;
  }
}

@media screen and (max-width: 980px) {
  #hero-img {
    display: none;
  }
}

@media screen and (max-width: 300px) {
    p{
        width: 30ch;
    }

    #cta-btn{
        padding: 0.5rem 1rem;
        font-size: 1rem;
        margin-top: 1rem;
        margin-bottom: 1rem;
    }
}
</style>
