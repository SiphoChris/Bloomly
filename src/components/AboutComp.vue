<template>
  <div class="about">
    <h1>About Us</h1>
    <p v-for="text in about" :key="text">{{ text }}</p>
  </div>
</template>

<script>
export default {
  name: "AboutView",
  data() {
    return {
      about: [
        "Bloomly is your premier online destination for exquisite, fresh flowers delivered right to your doorstep. At Bloomly, we curate a stunning selection of floral arrangements that cater to every occasion, from everyday moments to life’s most significant celebrations. Our mission is to make the beauty of nature accessible with just a few clicks, offering an effortless way to brighten someone’s day or transform your space.",
        "With a commitment to quality and customer satisfaction, Bloomly partners with local growers and expert florists to ensure every bouquet is crafted with care and arrives in perfect condition. Whether you’re looking for vibrant blooms to express your love, elegant arrangements for a special event, or seasonal bouquets to enhance your home, Bloomly delivers exceptional floral experiences with convenience and reliability.",
        "Explore our diverse collection and let Bloomly help you celebrate life’s moments with the perfect floral touch.",
        "Join us in making your floral dreams come true. Start your journey with Bloomly today!",
      ],
    };
  },
};
</script>

<style scoped>
p{
  font-size: 1.2rem;
  line-height: 2rem;
  font-weight: 500;
  text-align: center;
  max-width: 55ch;
  padding: 0 2rem;
}
</style>
