<template>
    <h2>Products</h2>
    <div class="table-responsive">
      <table class="table table-hover table-dark">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Manage</th>
          </tr>
        </thead>
        <tbody>
            <slot name="tableRows"></slot>
        </tbody>
      </table>
    </div>
    <br>
    <br>
    <h2>Users</h2>
    <div class="productsTable-responsive">
      <table class="table table-hover table-dark">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Name</th>
            <th scope="col">Quantity</th>
            <th scope="col">Price</th>
            <th scope="col">Manage</th>
          </tr>
        </thead>
        <tbody>
            <slot name="usersTableRows"></slot>
        </tbody>
      </table>
    </div>
</template>

<script>
export default {};
</script>

<style></style>

<!-- <tr>
    <th scope="row">3</th>
    <td colspan="1">Larry the Bird</td>
    <td>@twitter</td>
  </tr> -->
