import express from "express";
import cors from "cors";
import users from "./routes/users.js";
import mongoose from "mongoose"

const PORT = process.env.PORT || 5050;
const app = express();

app.use(cors());
app.use(express.json());
app.use("/api/user", users);

const URI = process.env.ATLAS_URI || "";
mongoose.connect(URI)
.then(() => {
  console.log("mongoose connected")
})
.catch((err) => {
  console.log("mongoose failed to connect" + " " + err)
})

// start the Express server
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});