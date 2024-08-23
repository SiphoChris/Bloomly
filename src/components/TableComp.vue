<template>
    <h2>Products</h2>
    <div class="table-responsive">
      <table class="table table-hover table-dark table-bordered align-middle">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Name</th>
            <th scope="col">Price</th>
            <th scope="col">Quantity</th>
            <th scope="col">Image</th>
            <th scope="col">Category</th>
            <th scope="col">Description</th>
            <th scope="col">
                <slot name="addProduct"></slot>
            </th>
          </tr>
        </thead>
        <tbody>
            <slot name="productsTableRows"></slot>
        </tbody>
      </table>
    </div>
    <br>
    <br>
    <h2>Users</h2>
    <div class="productsTable-responsive">
      <table class="table table-hover table-dark table-bordered align-middle">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">First Name</th>
            <th scope="col">Last Address</th>
            <th scope="col">Email</th>
            <th scope="col">Age</th>
            <th scope="col">Role</th>
            <th scope="col">Profile</th>
            <th scope="col">
                <slot name="registerUser"></slot>
            </th>
          </tr>
        </thead>
        <tbody>
            <slot name="usersTableRows"></slot>
        </tbody>
      </table>
    </div>
</template>

<script>
export default {
    name: 'TableComp',
};
</script>
