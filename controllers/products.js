import { v4 as uuidv4 } from "uuid";

let products = [];

export const getProducts = (req, res) => res.send(products);

export const createProduct = (req, res) => {
  const product = { ...req.body, id: uuidv4() };
  products.push(product);
  res.send(product);
};

export const getProduct = (req, res) => {
  const foundProduct = products.find((product) => product.id === req.params.id);
  res.send(foundProduct);
};

export const deleteProduct = (req, res) => {
  const { id } = req.params;
  const foundProduct = products.filter((product) => product.id === id);
  products = products.filter((product) => product.id !== id);
  res.status(200).send(foundProduct);
};

export const updateProduct = (req, res) => {
  const { id } = req.params;
  const { product, price } = req.body;

  const foundProduct = products.find((product) => product.id === id);

  if (product) foundProduct.product = product;
  if (price) foundProduct.price = price;

  res.send(foundProduct);
};
