<template>
    <div class="card">
      <div class="image_container">
        <img :src="product.image" alt="Product Image" class="product-image" />
      </div>
      <div class="title">
        <span>{{ product.name }}</span>
      </div>
      <div class="action">
        <div class="price">
          <span>{{ product.price }}</span>
        </div>
        <button class="cart-button">
          <span>View Details</span>
        </button>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'CardComp',
    props: {
      product: Object,
    },
  };
  </script>

<style scoped>
.card {
  --bg-card: #27272a;
  --primary: #6d28d9;
  --primary-800: #4c1d95;
  --primary-shadow: #2e1065;
  --light: #d9d9d9;
  --zinc-800: #18181b;
  --bg-linear: linear-gradient(0deg, var(--primary) 50%, var(--light) 125%);

  position: relative;

  display: flex;
  flex-direction: column;
  gap: 0.75rem;

  padding: 1rem;
  width: 14rem;
  background-color: var(--bg-card);

  border-radius: 1rem;
}

.image_container {
  overflow: hidden;
  cursor: pointer;

  position: relative;
  z-index: 5;

  width: 100%;
  height: 8rem;
  background-color: var(--primary-800);

  border-radius: 0.5rem;
}

.image_container .image {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  width: 3rem;
  fill: var(--light);
}

.title {
  overflow: clip;

  width: 100%;

  font-size: 1rem;
  font-weight: 600;
  color: var(--light);
  text-transform: capitalize;
  text-overflow: ellipsis;
}

.size {
  font-size: 0.75rem;
  color: var(--light);
}

.list-size .item-list-button {
  cursor: pointer;

  padding: 0.5rem;
  background-color: var(--zinc-800);

  font-size: 0.75rem;
  color: var(--light);
  border-radius: 0.25rem;

  transition: all 0.3s ease-in-out;
}


.action {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.price {
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--light);
}

.cart-button {
  cursor: pointer;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.25rem;

  padding: 0.5rem;
  width: 100%;
  background-image: var(--bg-linear);

  font-size: 0.85rem;
  font-weight: 700;
  color: var(--light);

  border-radius: 0.5rem;
}

</style>
