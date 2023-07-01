import express from "express";
import { coordinatorRoutes, courseRoutes, mentorRoutes } from "./routes";

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.send("OK");
});

app.use("/api/v1/coordinator", coordinatorRoutes);
app.use("/api/v1/course", courseRoutes);
app.use("/api/v1/mentor", mentorRoutes);

app.listen(5000, () => console.log("server listening at port:5000"));
