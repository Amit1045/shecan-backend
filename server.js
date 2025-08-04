import express from "express";
import dotenv from "dotenv";
import fs from "fs";
import cors from "cors"
dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 8000;
const filePath = process.env.DATA_FILE || "./JsonFileData/Data.json";

app.get("/api", (req, res) => {
  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) {
      return res.status(500).json({ error: "Unable to read data." });
    }
    try {
      const parsed = JSON.parse(data);
      res.json(parsed);

    } catch (err) {
      res.status(500).json({ error: "Invalid JSON format in file." });
    }
  });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
