const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 5000;

const data = {
  items: [
    { id: 1, name: "Alin" },
    { id: 2, name: "Bob" },
  ],
};

app.use(
  cors({
    origin: "http://localhost:3000",
  })
);

app.get("/:id", (request, response) => {
  console.log(request.query);
  console.log(request.params);
  response.send(data);
});

app.put("/", express.json(), (request, response) => {
  console.log(request.body);
  const present = data.items.find(
    (objectValue) => objectValue.id === request.body.id
  );
  const index = data.items.indexOf(present);
  if (!present) {
    response.status(404);
    response.send({ Error: "Id not found!" });
  } else {
    data.items[index] = request.body;
    response.send(data);
  }
});

app.post("/", express.json(), (request, response) => {
  console.log(request.body);
  const alreadyPresent = data.items.find(
    (objectValue) => objectValue.id === request.body.id
  );
  if (alreadyPresent) {
    response.status(409);
    response.send({ Error: "Id duplication!" });
  } else {
    data.items.push(request.body);
    response.send(data);
  }
});

app.delete("/", express.json(), (request, response) => {
  console.log(request.body);
  const present = data.items.find(
    (objectValue) => objectValue.id === request.body.id
  );
  if (!present) {
    response.status(404);
    response.send({ Error: "Id not found" });
  } else {
    data.items = data.items.filter(
      (objectValue) => objectValue.id != request.body.id
    );
    response.send(data);
  }
});

app.use((request, response) => {
  response.type("text/plain");
  response.status(404);
  response.send({ Error: "Page not found" });
});

app.listen(PORT, () => {
  console.log(`Running on port: ${PORT}`);
});
