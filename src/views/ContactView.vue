<template>
  <div class="contact">
    <Form />
    <Footer id="footer"/>
  </div>
</template>
<script>
import Footer from "@/components/FooterComp.vue";
import Form from "@/components/FormComp.vue";
export default {
  name: "ContactView",
  components: {
    Form,
    Footer,
  },
};
</script>
<style scoped>
.contact{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 5rem 0 0 0;
  gap: 5rem;
}
#footer{
    width: 100%;
}

@media (max-width: 600px) {
  .contact {
    gap: 0;
    padding: 2rem 0 0 0;
    width: 100%;
  }
}
</style>
