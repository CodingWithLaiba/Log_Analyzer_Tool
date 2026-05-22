import { useState } from "react";
import axios from "axios";
function App() {
  const [file, setFile] = useState(null);
  const [result, setResult] = useState(null);
  const uploadFile = async () => {
    try {
      const formData = new FormData();
      formData.append("file", file);

      const res = await axios.post("http://localhost:5000/analyze", formData);

      setResult(res.data);
    } catch (error) {
      console.log(error);
      alert("Something went wrong while analyzing file");
    }
  };

  return (
    <>
      <h2>Log Analyzer tool</h2>
      <input type="file" onChange={(e) => setFile(e.target.files[0])} />
      <button onClick={uploadFile}>Upload file to analyze</button>
      {result && (
        <div>
          <h4>Analyze Result:</h4>
          <p>Total Lines: {result.total_lines}</p>
          <p>Bad Lines: {result.bad_lines}</p>
          <p>
            <b>Endpoints:</b>
          </p>
          <pre>{JSON.stringify(result.endpoints, null, 2)}</pre>
          <p>
            <b>Status Counts:</b>
          </p>
          <pre>{JSON.stringify(result.status_counts, null, 2)}</pre>
        </div>
      )}
    </>
  );
}

export default App;
