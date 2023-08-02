const express = require("express");
const server = express();
const mongoose = require("mongoose");
const { createProduct } = require("./controller/Product");
const productsRouters = require("./routes/Products");
//midleware
//to  parse req.body
server.use(express.json());
server.use("/products", productsRouters.router);

//Database
main().catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/ecommerce");
  console.log("database connected");
}
server.get("/", (req, res) => {
  res.json({ status: "success" });
});

//server started
server.listen(8080, () => {
  console.log("server started");
});
