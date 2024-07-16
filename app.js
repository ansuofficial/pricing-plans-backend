const express = require("express");
const cartData = require("./pricing-card-data");
const app = express();

app.use(express.json());
app.use(cors());

app.get("/", (request, response) => {
  return response.json(cartData);
});

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`listening to port ${PORT}`);
});
