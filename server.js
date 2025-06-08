require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
const productsRoute = require("./routes/product-router.js");
const connectDb = require("./utils/db.js");

const corsOptions = {
  origin: "http://localhost:5173",
  methods: "GET , POST, PUT, PATCH, DELETE, HEAD",
  credentials: true,
};

app.use(cors(corsOptions));

app.use(express.json());

app.use("/api", productsRoute);

const PORT = 5000;

connectDb().then(() => {
  app.listen(PORT, () => {
    console.log(`server is running on ${PORT}`);
  });
});
