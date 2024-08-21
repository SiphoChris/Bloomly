<template>
  <nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Bloomly</a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ms-auto">
          <li class="nav-item">
            <router-link
              class="nav-link"
              active-class="active-link"
              to="/"
              exact
              >Home</router-link
            >
          </li>
          <li class="nav-item">
            <router-link
              class="nav-link"
              active-class="active-link"
              to="/products"
              >Products</router-link
            >
          </li>
          <li class="nav-item">
            <router-link class="nav-link" active-class="active-link" to="/about"
              >About</router-link
            >
          </li>
          <li class="nav-item">
            <router-link
              class="nav-link"
              active-class="active-link"
              to="/contact"
              >Contact</router-link
            >
          </li>
          <li class="nav-item">
            <router-link class="nav-link" active-class="active-link" to="/admin"
              >Admin</router-link
            >
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "NavComp",
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Fira+Sans:wght@100;200;300;400;500;600;700;800;900&family=Pacifico&display=swap');

nav {
  padding: 1.5rem 3rem;
}

.nav-link {
  text-decoration: none;
  font-size: 1.2rem;
  margin: 0 0.5rem;
}

.active-link {
  font-weight: bold;
}

.navbar-brand {
  color: #5d3fd3;
  font-size: 2rem;
  letter-spacing: 0.1rem;
  font-family: "Pacifico", cursive;
}
</style>
