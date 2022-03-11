const express = require("express");
const api = express();
api.use(express.json());

const cats = [
  { id: 1, name: "Chai", breed: "Tortoiseshell", age: 3 },
  { id: 2, name: "Millie", breed: "British-Shorthair", age: 1 },
  { id: 3, name: "Aiko", breed: "Tabby", age: 1 },
];

api.listen(3000, () => console.log("API up and running"));

api.get("/", (_, res) => res.send("Hello we are team Rudar!"));

api.get("/cats", (_, res) => res.json(cats));

api.get("/cats/:name", (req, res) => {
  const inputName = req.params.name;
  const cat = cats.find(
    (cat) => cat.name.toLowerCase() === inputName.toLowerCase()
  );
  res.json(cat);
});
