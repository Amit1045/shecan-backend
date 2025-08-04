
import express from "express";
import fs from "fs";

const app = express();
app.use(express.json());

const filePath = "./JsonFileData/Data.json";

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

app.listen(8000,()=>{
    console.log(`Server is running on http://localhost:8000`);
    
})