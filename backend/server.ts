import express from "express";
import { coordinatorRoutes } from "./routes";

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.send("OK");
});

app.use("/api/v1/coordinator", coordinatorRoutes);

app.listen(5000, () => console.log("server listening at port:5000"));
