// server/index.js

const express = require("express");

const v1 = 99000.96;
const v2 = 999.04;

const money = v1 + v2;

const response = money.toLocaleString("pt-BR", {
  style: "currency",
  currency: "BRL",
});

const january = new Date(9e8);
const spanish = new Intl.DateTimeFormat("es", { month: "long" });

// comentário

const PORT = process.env.PORT || 3001;

const app = express();

app.get("/api", (req, res) => {
  res.json({
    message: response,
    test: january,
    date: spanish.format(january) === "enero" ? true : false,
  });
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
