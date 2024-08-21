import express from "express";
import cors from 'cors'
import {corsResolver} from './middlewares/corsResolver.js'
import path from "path";
import { fileURLToPath } from "url";
import "dotenv/config";
import routes from "./controllers/index.js";
import { errorHandling } from "./middlewares/errorHandling.js";


// global variables
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const server = express();
const port = +process.env.PORT || 4000;


// middleware
server.use(express.static("./static"), express.urlencoded({ extended: true }));
server.use(routes);
server.use(cors(corsResolver))

// base route
server.get("/", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./static/html/index.html"));
});

// error handler
server.get('*', (req, res) => {
  res.status(404).json({status: res.statusCode, error:"Route not found"});
});

server.use(errorHandling)

server.listen(port, () => console.log(`server running on port ${port}`));
