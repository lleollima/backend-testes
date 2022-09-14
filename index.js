// server/index.js

const express = require("express");

const v1 = 1.96;
const v2 = 1.04;

const money = v1 + v2;

const response = money.toLocaleString("pt-BR", {
  style: "currency",
  currency: "BRL",
});

// comentário

const PORT = process.env.PORT || 3001;

const app = express();

app.get("/api", (req, res) => {
  res.json({ message: response });
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
