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

    let methodMatch = line.match(/\b(GET|POST|PUT|DELETE)\b/);
    let pathMatch = line.match(/\/api\/[a-zA-Z0-9\/_-]*/);
    let statusMatch = line.match(/\b(200|201|301|302|400|401|403|404|500)\b/);

    if (!methodMatch || !pathMatch) {
      bad_lines++;
      continue;
    }
    let method = methodMatch[0];
    let path = pathMatch[0];
    let status = statusMatch ? statusMatch[0] : "-";

    endpoints[path] = (endpoints[path] || 0) + 1;

    if (status !== "-") {
      status_counts[status] = (status_counts[status] || 0) + 1;
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
