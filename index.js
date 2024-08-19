import express from "express";
import "dotenv/config";

// global variables
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const server = express();
const port = process.env.PORT || 4000;

server.use(
  express.static("./static"),
  express.urlencoded({ extended: true }),
  express.json()
);

// base route
server.get("^/home$", (req, res) => {
    res.sendFile(path.resolve("./static/html/index.html"));
  });

// error page
server.get("*", (req, res) => {
    res.jso({
        status: 404,
        error: '404 : Resource not found'
    });
  })

server.listen(port, () => console.log(`server running on port ${port}`));
