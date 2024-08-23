<template>
    <div class="admin">
      <Loader v-if="loading" />
      <div class="container" v-else>
        <h1>Admin</h1>
  
        <!--  Edit Product Modal -->
        <Modal id="productModal">
          <template v-slot:modalContent>
            <div class="modal-body text-center d-flex justify-content-center align-items-center flex-column gap-3">
              <input v-model="editProduct.prodName" type="text" placeholder="Product Name" />
              <input v-model="editProduct.amount" type="text" placeholder="Product Price" />
              <input v-model="editProduct.prodUrl" type="text" placeholder="Product Image URL" />
              <input v-model="editProduct.Category" type="text" placeholder="Product Category" />
              <input v-model="editProduct.quantity" type="text" placeholder="Product Quantity" />
              <input v-model="editProduct.prodDescription" type="text" placeholder="Product Description" />
            </div>
          </template>
          <template v-slot:modalFooter>
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            <button @click="updateProduct" type="button" class="btn btn-primary">Save changes</button>
          </template>
        </Modal>
  
        <!-- Edit User Modal -->
        <Modal id="usersModal">
          <template v-slot:modalContent>
            <div class="modal-body text-center d-flex justify-content-center align-items-center flex-column gap-3">
              <input v-model="editUser.firstName" type="text" placeholder="First Name" />
              <input v-model="editUser.lastName" type="text" placeholder="Last Name" />
              <input v-model="editUser.emailAdd" type="email" placeholder="Email Address" />
              <input v-model="editUser.userAge" type="number" placeholder="Age" />
              <input v-model="editUser.userRole" type="text" placeholder="Role" />
              <input v-model="editUser.userProfile" type="text" placeholder="Profile" />
            </div>
          </template>
          <template v-slot:modalFooter>
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            <button @click="updateUser" type="button" class="btn btn-primary">Save changes</button>
          </template>
        </Modal>
  
        <!-- Add Product Modal -->
        <Modal id="addProductModal">
          <template v-slot:modalContent>
            <div class="modal-body text-center d-flex justify-content-center align-items-center flex-column gap-3">
              <input v-model="newProduct.prodName" type="text" placeholder="Product Name" />
              <input v-model="newProduct.amount" type="text" placeholder="Product Price" />
              <input v-model="newProduct.prodUrl" type="text" placeholder="Product Image URL" />
              <input v-model="newProduct.Category" type="text" placeholder="Product Category" />
              <input v-model="newProduct.quantity" type="text" placeholder="Product Quantity" />
              <input v-model="newProduct.prodDescription" type="text" placeholder="Product Description" />
            </div>
          </template>
          <template v-slot:modalFooter>
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            <button @click="createProduct" type="button" class="btn btn-primary">Save changes</button>
          </template>
        </Modal>
  
        <!-- Add User Modal -->
        <Modal id="addUserModal">
          <template v-slot:modalContent>
            <div class="modal-body text-center d-flex justify-content-center align-items-center flex-column gap-3">
              <input v-model="newUser.firstName" type="text" placeholder="First Name" />
              <input v-model="newUser.lastName" type="text" placeholder="Last Name" />
              <input v-model="newUser.emailAdd" type="email" placeholder="Email Address" />
              <input v-model="newUser.userAge" type="number" placeholder="Age" />
              <input v-model="newUser.userRole" type="text" placeholder="Role" />
              <input v-model="newUser.userProfile" type="text" placeholder="Profile" />
            </div>
          </template>
          <template v-slot:modalFooter>
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            <button @click="registerUser" type="button" class="btn btn-primary">Save changes</button>
          </template>
        </Modal>
  
        <TableComp>
          <template v-slot:productsTableRows>
            <tr v-for="product in products" :key="product.prodID">
              <td scope="row">{{ product.prodID }}</td>
              <td>{{ product.prodName }}</td>
              <td>{{ product.amount }}</td>
              <td>{{ product.quantity }}</td>
              <td>
                <img :src="product.prodUrl" alt="Product Image" id="product-image" />
              </td>
              <td>{{ product.Category }}</td>
              <td>{{ product.prodDescription }}</td>
              <td>
                <div class="btn-group" userRole="group" aria-label="Basic example">
                  <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#productModal" @click="editProductData(product)">
                    Edit
                  </button>
                  <button @click="deleteProduct(product)" type="button" class="btn btn-primary">Delete</button>
                </div>
              </td>
            </tr>
          </template>
          <template v-slot:usersTableRows>
            <tr v-for="user in users" :key="user.userID">
              <td scope="row">{{ user.userID }}</td>
              <td>{{ user.firstName }}</td>
              <td>{{ user.lastName }}</td>
              <td>{{ user.emailAdd }}</td>
              <td>{{ user.userAge }}</td>
              <td>{{ user.userRole }}</td>
              <td>
                <img :src="user.userProfile" alt="User Profile" id="profile-picture" />
              </td>
              <td>
                <div class="btn-group" userRole="group" aria-label="Basic example">
                  <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#usersModal" @click="editUserData(user)">
                    Edit
                  </button>
                  <button @click="deleteUser(user)" type="button" class="btn btn-primary">Delete</button>
                </div>
              </td>
            </tr>
          </template>
          <template v-slot:addProduct>
            <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#addProductModal">
              Add Product
            </button>
          </template>
          <template v-slot:registerUser>
            <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#addUserModal">
              Add User
            </button>
          </template>
        </TableComp>
      </div>
      <Footer id="footer" />
    </div>
  </template>
  
  <script>
  import Footer from "@/components/FooterComp.vue";
  import TableComp from "@/components/TableComp.vue";
  import Modal from "@/components/ModalComp.vue";
  import Loader from "@/components/LoaderComp.vue";
  import { mapState } from "vuex";
  
  export default {
    name: "AdminView",
    components: {
      Loader,
      Modal,
      TableComp,
      Footer,
    },
    data() {
      return {
        loading: true,
        editProduct: {
          prodID: "",
          prodName: "",
          amount: "",
          prodDescription: "",
          prodUrl: "",
          Category: "",
        },
        editUser: {
          userID: "",
          firstName: "",
          lastName: "",
          emailAdd: "",
          userAge: "",
          userRole: "",
          userProfile: "",
        },
        newProduct: {
          prodID: "",
          prodName: "",
          amount: "",
          prodDescription: "",
          prodUrl: "",
          Category: "",
        },
        newUser: {
          userID: "",
          firstName: "",
          lastName: "",
          emailAdd: "",
          userAge: "",
          userRole: "",
          userProfile: "",
        },
      };
    },
    computed: {
      ...mapState({
        products: (state) => state.products,
        users: (state) => state.users,
      }),
    },
    methods: {
      async fetchAllProducts() {
        this.loading = true;
        await this.$store.dispatch("fetchAllProducts");
        this.loading = false;
      },
      async fetchAllUsers() {
        this.loading = true;
        await this.$store.dispatch("fetchAllUsers");
        this.loading = false;
      },
      async deleteProduct(product) {
        await this.$store.dispatch("deleteProduct", product.prodID);
        this.fetchAllProducts();
      },
      async deleteUser(user) {
        await this.$store.dispatch("deleteUser", user.userID);
        this.fetchAllUsers();
      },
      async createProduct() {
        await this.$store.dispatch("addProduct", this.newProduct);
        this.fetchAllProducts();
        this.clearNewProductData();
      },
      async registerUser() {
        await this.$store.dispatch("registerUser", this.newUser);
        this.fetchAllUsers();
        this.clearNewUserData();
      },
      async updateProduct() {
        await this.$store.dispatch("updateProduct", this.editProduct);
        this.fetchAllProducts();
      },
      async updateUser() {
        await this.$store.dispatch("updateUser", this.editUser);
        this.fetchAllUsers();
      },
      editProductData(product) {
        this.editProduct = { ...product };
      },
      editUserData(user) {
        this.editUser = { ...user };
      },
      clearNewProductData() {
        this.newProduct = {
          prodID: "",
          prodName: "",
          amount: "",
          prodDescription: "",
          prodUrl: "",
          Category: "",
        };
      },
      clearNewUserData() {
        this.newUser = {
          userID: "",
          firstName: "",
          lastName: "",
          emailAdd: "",
          userAge: "",
          userRole: "",
          userProfile: "",
        };
      },
    },
    mounted() {
      this.fetchAllProducts();
      this.fetchAllUsers();
    },
  };
  </script>
  
<style scoped>
h1 {
  margin: 5rem 0;
  text-decoration: underline;
}
.admin {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5rem;
  min-height: 100dvh;
  padding-top: 6rem;
}
@media screen and (max-width: 400px) {
    p{
        width: 22ch;
    }
}

#product-image {
  width: 10rem;
  height: 10rem;
  object-fit: cover;
}
#profile-picture {
  width: 5rem;
  height: 5rem;
  border-radius: 50%;
}
#footer {
  width: 100%;
}
</style>
