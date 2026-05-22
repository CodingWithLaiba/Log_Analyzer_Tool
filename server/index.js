const express = require("express");
const cors = require("cors");
const fs = require("fs");
const multer = require("multer");

const app = express();
app.use(cors());
// file upload
const upload = multer({ dest: "uploads/" });
app.post("/analyze", upload.single("file"), (req, res) => {
  const data = fs.readFileSync(req.file.path, "utf-8");
  const lines = data.split("\n");
  let total_lines = 0;
  let bad_lines = 0;
  let endpoints = {};
  let status_counts = {};

  for (let i = 0; i < lines.length; i++) {
    let line = lines[i].trim().replace(/\r/g, "");
    if (!line) continue;
    total_lines++;

   let parts = line.split(" ")
    let method = parts[0];
    let path = parts[1];
    let status = parts[2]?parts[2].replace(/\r/g, "") : "-";

 
    
    if (!["GET","POST","PUT","DELETE"].includes(method)) {
      bad_lines++;
      continue;
    };

    if (endpoints[path]) {
      endpoints[path]++;
    } else {
      endpoints[path] = 1;
    }
    if (status !== "-") {
      if (status_counts[status]) {
        status_counts[status]++;
      } else {
        status_counts[status] = 1;
      }
    }
  }
  res.json({
    total_lines,
    bad_lines,
    endpoints,
    status_counts,
  });
});
app.listen(5000, () => {
  console.log("server runing on port 5000");
});
