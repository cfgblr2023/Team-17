import express from "express";
import cors from "cors";
import {
  authRoutes,
  coordinatorRoutes,
  courseRoutes,
  menteeRoutes,
  mentorRoutes,
} from "./routes";

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("OK");
});

app.use("/api/v1/coordinator", coordinatorRoutes);
app.use("/api/v1/course", courseRoutes);
app.use("/api/v1/mentor", mentorRoutes);
app.use("/api/v1/mentee", menteeRoutes);
app.use("/api/v1/auth", authRoutes);

app.listen(5000, () => console.log("server listening at port:5000"));
