<template>
  <div class="admin">
    <Loader v-if="loading" />
    <div class="container" v-else>
      <h1>Admin</h1>

      <!-- Product Modal -->
      <Modal id="productModal">
        <template v-slot:modalContent>
          <div
            class="modal-body text-center d-flex justify-content-center align-items-center flex-column gap-3"
          >
            <input
              v-model="editProduct.prodName"
              type="text"
              placeholder="Product Name"
            />
            <input
              v-model="editProduct.amount"
              type="text"
              placeholder="Product Price"
            />
            <input
              v-model="editProduct.prodUrl"
              type="text"
              placeholder="Product Image URL"
            />
            <input
              v-model="editProduct.Category"
              type="text"
              placeholder="Product Category"
            />
            <input
              v-model="editProduct.quantity"
              type="text"
              placeholder="Product Qauantity"
            />
            <input
              v-model="editProduct.prodDescription"
              type="text"
              placeholder="Product Description"
            />
          </div>
        </template>
        <template v-slot:modalFooter>
          <button
            type="button"
            class="btn btn-secondary"
            data-bs-dismiss="modal"
          >
            Close
          </button>
          <button @click="updateProduct" type="button" class="btn btn-primary">
            Save changes
          </button>
        </template>
      </Modal>

      <!-- User Modal -->
      <Modal id="usersModal">
        <template v-slot:modalContent>
          <div
            class="modal-body text-center d-flex justify-content-center align-items-center flex-column gap-3"
          >
            <input
              v-model="editUser.firstName"
              type="text"
              placeholder="First Name"
            />
            <input
              v-model="editUser.lastName"
              type="text"
              placeholder="Last Name"
            />
            <input
              v-model="editUser.emailAdd"
              type="email"
              placeholder="Email Address"
            />
            <input v-model="editUser.userAge" type="number" placeholder="Age" />
            <input v-model="editUser.userRole" type="text" placeholder="Role" />
            <input
              v-model="editUser.userProfile"
              type="text"
              placeholder="Profile"
            />
          </div>
        </template>
        <template v-slot:modalFooter>
          <button
            type="button"
            class="btn btn-secondary"
            data-bs-dismiss="modal"
          >
            Close
          </button>
          <button @click="updateUser" type="button" class="btn btn-primary">
            Save changes
          </button>
        </template>
      </Modal>

      <TableComp>
        <template v-slot:productsTableRows>
          <tr v-for="product in products" :key="product.prodID">
            <td scope="row">{{ product.prodID }}</td>
            <td>{{ product.prodName }}</td>
            <td>{{ product.amount }}</td>
            <td>{{ product.quantity }}</td>
            <td><img :src="product.prodUrl" alt="Product Image" id="product-image"/></td>
            <td>{{ product.Category }}</td>
            <td>{{ product.prodDescription }}</td>
            <td>
              <div
                class="btn-group"
                userRole="group"
                aria-label="Basic example"
              >
                <button
                  type="button"
                  class="btn btn-primary"
                  data-bs-toggle="modal"
                  data-bs-target="#productModal"
                  @click="editProductData(product)"
                >
                  Edit
                </button>
                <button
                  @click="deleteProduct(product)"
                  type="button"
                  class="btn btn-primary"
                >
                  Delete
                </button>
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
            <td><img :src="user.userProfile" alt="User Profile" id="profile-picture"/></td>
            <td>
              <div
                class="btn-group"
                userRole="group"
                aria-label="Basic example"
              >
                <button
                  type="button"
                  class="btn btn-primary"
                  data-bs-toggle="modal"
                  data-bs-target="#usersModal"
                  @click="editUserData(user)"
                >
                  Edit
                </button>
                <button
                  @click="deleteUser(user)"
                  type="button"
                  class="btn btn-primary"
                >
                  Delete
                </button>
              </div>
            </td>
          </tr>
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
    async updateProduct() {
      await this.$store.dispatch("updateProduct", this.editProduct);
      this.fetchAllProducts();
      this.clearEditProductData();
    },
    async updateUser() {
      await this.$store.dispatch("updateUser", this.editUser);
      this.fetchAllUsers();
      this.clearEditUserData();
    },
    editProductData(product) {
      this.editProduct = { ...product };
    },
    editUserData(user) {
      this.editUser = { ...user };
    },
    clearEditProductData() {
      this.editProduct = {
        prodID: "",
        prodName: "",
        amount: "",
        prodDescription: "",
        prodUrl: "",
        Category: "",
      };
    },
    clearEditUserData() {
      this.editUser = {
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
