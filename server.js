require("dotenv").config();

const express = require("express");
const cors = require("cors");
const app = express();
const db = require("./db");

app.use(cors());
app.use(express.json());
app.use("/api/profile", require("./routes/profile.routes"));
app.use("/api/experience", require("./routes/experience.routes"));
app.use("/api/projects", require("./routes/project.routes"));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on ${PORT}`));
