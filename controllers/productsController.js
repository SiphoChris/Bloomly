import {Router, json} from "express";
import { product } from "../models/index.js";
// import { verifyToken } from "../middlewares/authenticateUser.js";

// routes
const productRouter = Router();

// middleware
productRouter.use(json());
// productRouter.use(verifyToken)

productRouter.get("/products", (req, res) => {
    product.fetchProducts(req, res);
})

productRouter.get("/products/recent", (req, res) => {
  product.recentProducts(req, res);
});

productRouter.get("/products/:prodID", (req, res) => {
  product.fetchProductByID(req, res);
});


productRouter.post("/products/add", (req, res) => {
  product.addProduct(req, res);
});

productRouter.patch("/products/update/:prodID", (req, res) => {
  product.updateProduct(req, res);
});

productRouter.delete("/products/delete/:prodID", (req, res) => {
  product.deleteProductByID(req, res);
});


export default productRouter