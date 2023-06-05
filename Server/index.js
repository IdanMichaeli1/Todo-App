const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

let receivedData = [];

app.get("/todo-list", (req, res) => {
  res.send(receivedData);
});

app.post("/todo-list", (req, res) => {
  const newItem = { ...req.body, id: crypto.randomUUID(), checked: false };
  receivedData.push(newItem);
  res.send(receivedData);
});

app.delete("/todo-list/:id", (req, res) => {
  const itemId = req.params.id;
  receivedData = receivedData.filter((item) => item.id !== itemId);
  res.send(receivedData);
});

app.put("/todo-list/:id", (req, res) => {
  const itemId = req.params.id;
  receivedData = receivedData.map((item) =>
    item.id !== itemId
      ? item
      : {
          ...item,
          ...req.body,
        }
  );
  res.send(receivedData);
});

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
