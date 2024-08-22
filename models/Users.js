import { db } from "../config/index.js";
import { createToken } from "../middlewares/authenticateUser.js";
import { hash, compare } from "bcrypt";

class User {
  fetchAllUsers(req, res) {
    try {
      const queryString = `
                      SELECT * 
                      from Users;
                      `;
      db.query(queryString, (err, results) => {
        if (err)
          return res.status(500).json({
            status: res.statusCode,
            error: "Something is wrong on our side, please check again later",
          });
        if (!results.length)
          return res
            .status(404)
            .json({ status: res.statusCode, msg: "Users not found" });
        res.status(200).json({
          status: res.statusCode,
          results,
        });
      });
    } catch (e) {
      res.status(500).json({
        status: res.statusCode,
        error: e.message,
      });
    }
  }

  fetchUserByID(req, res) {
    try {
      const {
        params: { userID },
      } = req;
      const queryString = `
            SELECT *
            FROM Users
            WHERE userID = ?;
          `;
      db.query(queryString, [userID], (err, results) => {
        if (err) {
          return res
            .status(409)
            .json({ status: res.statusCode, error: "Unable to fetch user" });
        }
        if (results.length === 0) {
          return res
            .status(404)
            .json({ status: res.statusCode, error: "User not found" });
        }
        res.status(500).json({
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

  async registerUser(req, res) {
    try {
      let data = req.body;
      data.userPass = await hash(data.userPass, 10);
      let user = {
        emailAdd: data.emailAdd,
        userPass: data.userPass,
      };
      const queryString = `INSERT INTO Users
                          SET ?;`;
      db.query(queryString, [data], (err) => {
        if (err) {
          res.status(400).json({
            status: res.statusCode,
            msg: "This email already exists",
          });
        } else {
          const token = createToken(user);
          res.status(200).json({
            msg: "User created successfully",
            status: res.statusCode,
            token: token,
          });
        }
      });
    } catch (err) {
      res.status(500).json({ status: res.statusCode, error: err.message });
    }
  }

  async updateUser(req, res) {
    try {
      const { userID } = req.params;
      let data = req.body;
      if (data.userPass) {
        data.userPass = await hash(data.userPass, 10);
      }
      const queryString = `UPDATE Users
                          SET ?
                          WHERE userID = ?;`;
      db.query(queryString, [data, userID], (err) => {
        if (err)
          return res
            .status(409)
            .json({ status: res.statusCode, error: "Unable to update user" });
        res.status(200).json({
          status: res.statusCode,
          msg: "User updated successfully",
        });
      });
    } catch (e) {
      res.status(500).json({
        status: res.statusCode,
        error: e.message,
      });
    }
  }

  deleteUser(req, res) {
    try {
      const {
        params: { userID },
      } = req;
      const queryString = `DELETE FROM Users 
                          WHERE userID = ?;`;

      db.query(queryString, [userID], (err, results) => {
        if (err) {
          return res
            .status(500)
            .json({ status: res.statusCode, error: "Unable to delete user" });
        }
        if (results.affectedRows === 0) {
          return res
            .status(404)
            .json({ status: res.statusCode, msg: "User not found" });
        }

        res.status(200).json({
          status: res.statusCode,
          msg: "User deleted successfully",
        });
      });
    } catch (e) {
      res.status(500).json({ status: res.statusCode, error: "Server error" });
    }
  }

  loginUser(req, res) {
    try {
      const {
        body: { emailAdd, userPass },
      } = req;

      const queryString = `SELECT *
                          FROM Users
                          WHERE emailAdd = ?;`;

      db.query(queryString, [emailAdd], async (err, results) => {
        if (err) {
          return res.status(500).json({
            status: res.statusCode,
            error: "The error is on our side, please come and check later",
          });
        }

        if (results.length === 0) {
          return res.status(401).json({
            status: res.statusCode,
            error: "Invalid email.",
          });
        }

        const user = results[0];

        const isValidPass = await compare(userPass, user.userPass);

        if (isValidPass) {
          const token = createToken({
            emailAdd: user.emailAdd,
            userPass: user.userPass,
          });
          return res.status(200).json({
            status: res.statusCode,
            token,
            user: {
              userID: user.userID,
              firstName: user.firstName,
              lastName: user.lastName,
              userAge: user.userAge,
              emailAdd: user.emailAdd,
            },
          });
        } else {
          return res.status(401).json({
            status: res.statusCode,
            msg: "Invalid password or you have not registered.",
          });
        }
      });
    } catch (e) {
      return res.status(500).json({
        status: res.statusCode,
        msg: "Server error",
      });
    }
  }
}

export { User };
