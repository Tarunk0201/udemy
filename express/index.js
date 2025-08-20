import express from "express";
const app = express();
const port = 3000;

app.get("/home", (req, res) => {
  res.send("<h1>hello world i am your server</h1>");
});

app.get("/about", (req, res) => {
  res.send("<h1>hello world i am your server about</h1>");
});

app.listen(port, () => {
  console.log(`server is running on ${port}`);
});
