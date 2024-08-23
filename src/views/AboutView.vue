<template>
  <div class="about">
    <AboutComp />
    <Footer id="footer" />
  </div>
</template>
<script>
import Footer from "@/components/FooterComp.vue";
import AboutComp from "@/components/AboutComp.vue";
export default {
  name: "AboutView",
  components: {
    AboutComp,
    Footer,
  },
};
</script>
<style scoped>
.about {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 6rem;
  gap: 3rem;
}

#footer {
  width: 100%;
}
</style>
