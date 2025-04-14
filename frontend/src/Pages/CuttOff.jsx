import { useState } from "react";

const styles = {
  container: {
    maxWidth: "50%",
    margin: "150px auto 50px",
    padding: "20px",
    borderRadius: "15px",
    background: "linear-gradient(135deg, #f9f9f9, #e3e3e3)",
    boxShadow: "0 10px 20px rgba(0, 0, 0, 0.2)",
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
  },
  containerHover: {
    transform: "scale(1.02)",
    boxShadow: "0 15px 25px rgba(0, 0, 0, 0.3)",
  },
  heading: {
    textAlign: "center",
    fontWeight: "900",
    fontStyle: "italic",
    marginBottom: "20px",
    fontSize: "2rem",
    color: "rgb(53, 121, 256)",
    textShadow: "2px 2px 4px rgba(0, 0, 0, 0.2)",
  },
  formGroup: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginBottom: "20px",
  },
  input: {
    width: "70%",
    padding: "12px",
    border: "1px solid #ccc",
    borderRadius: "8px",
    fontSize: "1rem",
    transition: "border-color 0.3s ease, box-shadow 0.3s ease",
    marginBottom: "10px",
  },
  inputFocus: {
    borderColor: "#007BFF",
    boxShadow: "0 0 8px rgba(0, 123, 255, 0.5)",
  },
  select: {
    width: "70%",
    padding: "12px",
    border: "1px solid #ccc",
    borderRadius: "8px",
    fontSize: "1rem",
    backgroundColor: "#fff",
    transition: "border-color 0.3s ease, box-shadow 0.3s ease",
  },
  buttonContainer: {
    textAlign: "center",
    marginTop: "20px",
  },
  button: {
    padding: "12px 25px",
    backgroundColor: "#007BFF",
    color: "#fff",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    fontSize: "1rem",
    fontWeight: "bold",
    transition: "background-color 0.3s ease, transform 0.2s ease",
  },
  buttonHover: {
    backgroundColor: "#0056b3",
    transform: "scale(1.05)",
  },
  error: {
    marginTop: "20px",
    padding: "10px",
    backgroundColor: "#f8d7da",
    borderRadius: "6px",
    color: "#721c24",
    border: "1px solid #f5c6cb",
  },
  result: {
    margin: "20px auto",
    maxWidth: "70%",
    textAlign: "center",
    padding: "15px",
    backgroundColor: "#d4edda",
    borderRadius: "6px",
    color: "#155724",
    border: "1px solid #c3e6cb",
    transition: "all 0.3s ease",
  },
};

function App() {
  const [marks, setMarks] = useState("");
  const [difficulty, setDifficulty] = useState("Easy");
  const [percentile, setPercentile] = useState("");
  const [rank, setRank] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleMarksChange = (e) => {
    const value = e.target.value;
    if (value === "" || (Number(value) >= -60 && Number(value) <= 300)) {
      setMarks(value);
    }
  };

  const handleSubmit = async () => {
    setLoading(true);
    setError("");
    const data = { marks: parseInt(marks), difficulty };

    try {
      const response = await fetch("http://127.0.0.1:8000/predict", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const result = await response.json();
      setPercentile(result.percentile);
      setRank(result.rank);
    } catch (error) {
      setError("Failed to fetch prediction. Please try again.");
      console.error("Error fetching prediction:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      style={styles.container}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = styles.containerHover.transform;
        e.currentTarget.style.boxShadow = styles.containerHover.boxShadow;
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "none";
        e.currentTarget.style.boxShadow = styles.container.boxShadow;
      }}
    >
      <h1 style={styles.heading}>All India Rank Calculator</h1>

      <h5 style={{ color: "#555", marginBottom: "20px", textAlign: "center" }}>
        Predict Your All India Rank Here:
      </h5>

      <div style={styles.formGroup}>
        <input
          type="number"
          placeholder="Enter marks (-60 to 300)"
          value={marks}
          onChange={handleMarksChange}
          style={styles.input}
          onFocus={(e) => {
            e.target.style.borderColor = styles.inputFocus.borderColor;
            e.target.style.boxShadow = styles.inputFocus.boxShadow;
          }}
          onBlur={(e) => {
            e.target.style.borderColor = "#ccc";
            e.target.style.boxShadow = "none";
          }}
        />

        <select
          value={difficulty}
          onChange={(e) => setDifficulty(e.target.value)}
          style={styles.select}
          onFocus={(e) => {
            e.target.style.borderColor = styles.inputFocus.borderColor;
            e.target.style.boxShadow = styles.inputFocus.boxShadow;
          }}
          onBlur={(e) => {
            e.target.style.borderColor = "#ccc";
            e.target.style.boxShadow = "none";
          }}
        >
          <option value="Easy">Easy</option>
          <option value="Moderate">Moderate</option>
          <option value="Hard">Hard</option>
        </select>
      </div>

      <div style={styles.buttonContainer}>
        <button
          onClick={handleSubmit}
          style={styles.button}
          onMouseOver={(e) => {
            e.target.style.backgroundColor = styles.buttonHover.backgroundColor;
            e.target.style.transform = styles.buttonHover.transform;
          }}
          onMouseOut={(e) => {
            e.target.style.backgroundColor = styles.button.backgroundColor;
            e.target.style.transform = "none";
          }}
          disabled={loading}
        >
          {loading ? "Predicting..." : "Predict"}
        </button>
      </div>

      {error && <div style={styles.error}>{error}</div>}

      {percentile && rank && (
        <div style={styles.result}>
          <h3>
            Percentile: <span>{percentile}</span>
          </h3>
          <h3>
            All India Rank: <span>{rank}</span>
          </h3>
        </div>
      )}
    </div>
  );
}

export default App;