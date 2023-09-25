import express from "express";
import bodyParser from "body-parser";
import productsRoutes from "./routes/products.js";

const app = express();
app.use(bodyParser.json());

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => res.send("App is running"));

app.use("/products", productsRoutes);

app.listen(PORT, () =>
  console.log(`Server listening on: http://localhost:${PORT}`)
);
