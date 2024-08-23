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
  padding-top: 10rem;
  border-radius: 1rem;
  gap: 3rem;
}

#footer {
  width: 100%;
}

.about {
  --s: 60px; 
  --c1: #b09f79;
  --c2: #47607474;
  
  --_g: #0000 83%,var(--c1) 85% 99%,#0000 101%;
  background:
    radial-gradient(27% 29% at right ,var(--_g)) calc(var(--s)/ 2) var(--s),
    radial-gradient(27% 29% at left  ,var(--_g)) calc(var(--s)/-2) var(--s),
    radial-gradient(29% 27% at top   ,var(--_g)) 0 calc(var(--s)/ 2),
    radial-gradient(29% 27% at bottom,var(--_g)) 0 calc(var(--s)/-2)
    var(--c2);
  background-size: calc(2*var(--s)) calc(2*var(--s));
}
</style>
