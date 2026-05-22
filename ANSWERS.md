## 1. How to run the project

## for Backend:

```bash
mkdir serve
cd server
npm install
npm init -y
npm install express cors multer
node index.js

- Server runs on:

http://localhost:5000

```

### for Frontend

```bash
cd log-tool
npm install
npm run dev

- Frontend runs on:

http://localhost:5173
```

---

### 2. Stack choice:

I used Node.js + Express for the backend because it is simple, fast, and works well for handling file uploads and processing logs. For the frontend, I used React to easily display the analysis results.

### 3.Edge case

My code handles is malformed or incomplete log lines where the required fields (like HTTP method or API path) are missing.

In server/index.js, line 27:

if (!methodMatch || !pathMatch) {
bad_lines++;
continue;
}

If a line does not contain a valid method (GET, POST, etc.) or a valid API path, it is counted as a bad line and skipped safely.

Without this handling, the program could try to process invalid data, which would lead to incorrect results or even break the analysis.

### 4. AI Usage

I used ChatGPT to understand the basic idea of log parsing and to get help with regex for extracting data from different log formats.

I also referred to it when I ran into bugs or confusion while handling malformed or inconsistent log lines.

### 5. Honest Gap

One thing that isn’t perfect is that the log parser is still quite basic and may not handle all advanced or unusual log formats correctly, like deeply nested JSON logs or multi-line entries.

If I had more time, I would improve it by supporting more log formats, handling large files more efficiently, and improving the output with better visual summaries.
