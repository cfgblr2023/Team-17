import express from "express";

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.send("OK");
});

app.listen(5000, () => console.log("server listening at port:5000"));
