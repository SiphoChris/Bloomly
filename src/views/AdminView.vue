<template>
  <div class="admin">
    <div class="container">
      <h1>Admin</h1>
      <TableComp />
    </div>
    <Footer id="footer" />
  </div>
</template>
<script>
import Footer from "@/components/FooterComp.vue";
import TableComp from "@/components/TableComp.vue";
export default {
  name: "AdminView",
  components: {
    TableComp,
    Footer,
  },
};
</script>
<style scoped>

h1{
    margin: 5rem 0;
    text-decoration: underline;
}
.admin{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5rem;
}
#footer{
  width: 100%;
}

</style>
