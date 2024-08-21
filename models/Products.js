import { db } from "../config/index.js";

class Product {
  fetchProducts(req, res) {
    try {
      const queryString = `
                        SELECT prodID, prodName, prodDescription, quantity, amount, Category, prodUrl
                        from Products;
                        `;
      db.query(queryString, (err, results) => {
        if (err)
          return res.status(409).json({
            status: res.statusCode,
            error: `Unable to fetch all products`,
          });
        if (results.length === 0) {
          return res
            .status(404)
            .json({ status: res.statusCode, error: "Products not found" });
        }
        res.status(200).json({
          status: res.statusCode,
          results,
        });
      });
    } catch (e) {
      res.status(500).json({
        status: res.statusCode,
        msg: e.message,
      });
    }
  }

  fetchProductByID(req, res) {
    try {
      const {
        params: { prodID },
      } = req;
      const queryString = `
              SELECT prodID, prodName, prodDescription, quantity, amount, Category, prodUrl
              FROM Products
              WHERE prodID = ?;
            `;
      db.query(queryString, [prodID], (err, results) => {
        if (err)
          return res
            .status(404)
            .json({ status: res.statusCode, error: "Unable to fetch product" });
        if (results.length === 0) {
          res
            .status(404)
            .json({ status: res.statusCode, error: "product not found" });
        }
        const product = results.find((product) => product.prodID === prodID);
        if (!product) {
          return res
            .status(404)
            .json({ status: res.statusCode, error: "Product not found" });
        }
        res.status(200).json({
          status: res.statusCode,
          results: results[0],
        });
      });
    } catch (e) {
      res.status(500).json({
        status: res.statusCode,
        msg: e.message,
      });
    }
  }

  recentProducts(req, res) {
    try {
      const queryString = `
              SELECT prodID, prodName, prodDescription, quantity, amount, Category, prodUrl
              FROM Products
              ORDER BY prodID DESC
              LIMIT 3;
            `;
      db.query(queryString, (err, results) => {
        if (err) {
          return res.status(500).json({
            status: res.status,
            error: "Unable to fetch recent products",
          });
        }
        if (results.length === 0) {
          return res
            .status(404)
            .json({ status: res.statusCode, error: "Products not found" });
        }
        res.status(200).json({
          status: res.statusCode,
          results,
        });
      });
    } catch (e) {
      res.json({
        status: res.statusCode,
        msg: e.message,
      });
    }
  }

  async addProduct(req, res) {
    try {
      let data = req.body;
      const queryString = `INSERT INTO Products SET ?;`;
      db.query(queryString, [data], (err) => {
        if (err) {
          return res
            .status(409)
            .json({ status: res.statusCode, error: "Unable to add product" });
        }
        res.status(201).json({
          status: res.statusCode,
          msg: "Product added successfully",
        });
      });
    } catch (e) {
      res.status(500).json({
        status: res.statusCode,
        msg: e.message,
      });
    }
  }

  async updateProduct(req, res) {
    try {
      const {
        params: { prodID },
      } = req;
      let data = req.body;
      const queryString = `UPDATE Products
                        SET ?
                        WHERE prodID = ?;`;
      db.query(queryString, [data, prodID], (err) => {
        if (err)
          return res.status(409).json({
            status: res.statusCode,
            error: "Unable to update product",
          });
        res.status(200).json({
          status: res.statusCode,
          msg: "Product updated successfully",
        });
      });
    } catch (e) {
      res.status(500).json({
        status: res.statusCode,
        msg: e.message,
      });
    }
  }

  deleteProductByID(req, res) {
    try {
      const {
        params: { prodID },
      } = req;
      const queryString = `DELETE FROM Products 
                           WHERE prodID = ?;`;

      db.query(queryString, [prodID], (err, results) => {
        if (err) {
          return res.status(500).json({
            status: res.statusCode,
            error: "Unable to delete product",
          });
        }
        if (results.affectedRows === 0) {
          return res
            .status(404)
            .json({ status: res.statusCode, msg: "Product not found" });
        }

        res.status(200).json({
          status: res.statusCode,
          msg: "Product deleted successfully",
        });
      });
    } catch (e) {
      console.error(e);
      res.status(500).json({ error: "Server error" });
    }
  }
}

export { Product };
