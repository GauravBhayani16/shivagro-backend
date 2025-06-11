require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
const productsRoute = require("./routes/product-router.js");
const connectDb = require("./utils/db.js");

const allowedOrigins = [
  "https://shivagroagency.netlify.app", // Production frontend
  "http://localhost:5173", // Local frontend (optional for local testing)
];

app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

app.use(express.json());

app.use("/api", productsRoute);

const PORT = 5000;

connectDb().then(() => {
  app.listen(PORT, () => {
    console.log(`server is running on ${PORT}`);
  });
});
