import { useState } from "react";

function App() {
  const [marks, setMarks] = useState("");
  const [difficulty, setDifficulty] = useState("Easy");
  const [percentile, setPercentile] = useState("");
  const [rank, setRank] = useState("");

  const handleMarksChange = (e) => {
    const value = e.target.value;
    if (value === "" || (Number(value) >= -60 && Number(value) <= 300)) {
      setMarks(value);
    }
  };

  const handleSubmit = async () => {
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
      console.error("Error fetching prediction:", error);
    }
  };

  return (
    <div
      style={{
        textAlign: "center",
        fontFamily: "'Roboto', sans-serif",
        backgroundColor: "rgb(253, 247, 239)",
        padding: "20px",
        borderRadius: "10px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        maxWidth: "50%",
        margin: "200px auto",
        transition: "transform 0.3s ease, box-shadow 0.3s ease",
      }}
      onMouseOver={(e) => {
        e.currentTarget.style.transform = "scale(1.02)";
        e.currentTarget.style.boxShadow = "0 6px 12px rgba(0, 0, 0, 0.15)";
      }}
      onMouseOut={(e) => {
        e.currentTarget.style.transform = "scale(1)";
        e.currentTarget.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.1)";
      }}
    >
      <h1
        style={{
          color: "#4CAF50",
          marginBottom: "20px",
          fontWeight: "800",
          fontStyle: "bold",
          textShadow: "1px 1px 2px rgba(0, 0, 0, 0.2)",
        }}
      >
        All India Rank Calculator
      </h1>

      <h3
  style={{
    color: "#ffffff", // White text for contrast
    backgroundColor: "#4CAF50", // Green background to highlight
    padding: "10px 20px", // Padding for spacing
    borderRadius: "8px", // Rounded corners
    marginBottom: "20px",
    fontWeight: "800", // Bold text
    fontStyle: "italic", // Italicized text
    textShadow: "2px 2px 4px rgba(0, 0, 0, 0.3)", // Stronger shadow for depth
    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)", // Subtle box shadow
    display: "inline-block", // Inline-block for better alignment
  }}
>
  Predict Your All India Rank Here:
</h3>

      <input
        type="number"
        placeholder="Enter marks (-60 to 300)"
        value={marks}
        onChange={handleMarksChange}
        style={{
          padding: "12px",
          margin: "10px",
          border: "1px solid #ccc",
          borderRadius: "5px",
          width: "90%",
          maxWidth: "300px",
          fontSize: "16px",
          boxShadow: "inset 0 2px 4px rgba(0, 0, 0, 0.1)",
          transition: "border-color 0.3s ease",
        }}
        onFocus={(e) => (e.target.style.borderColor = "#4CAF50")}
        onBlur={(e) => (e.target.style.borderColor = "#ccc")}
      />

      <select
        value={difficulty}
        onChange={(e) => setDifficulty(e.target.value)}
        style={{
          padding: "12px",
          margin: "10px",
          border: "1px solid #ccc",
          borderRadius: "5px",
          width: "90%",
          maxWidth: "320px",
          fontSize: "16px",
          backgroundColor: "#fff",
          boxShadow: "inset 0 2px 4px rgba(0, 0, 0, 0.1)",
          transition: "border-color 0.3s ease",
        }}
        onFocus={(e) => (e.target.style.borderColor = "#4CAF50")}
        onBlur={(e) => (e.target.style.borderColor = "#ccc")}
      >
        <option value="Easy">Hard</option>
        <option value="Moderate">Moderate</option>
        <option value="Hard">Easy</option>
      </select>

      <button
        onClick={handleSubmit}
        style={{
          padding: "10px 30px", // Increased padding
          margin: "20px 10px",
          backgroundColor: "#4CAF50",
          color: "white",
          border: "none",
          borderRadius: "8px", // Slightly larger border radius
          cursor: "pointer",
          fontSize: "20px", // Increased font size
          fontWeight: "bold", // Added bold text
          width: "640px", // Set a fixed width for consistency
          transition: "background-color 0.3s ease, transform 0.2s ease",
        }}
        onMouseOver={(e) => {
          e.target.style.backgroundColor = "#45a049";
          e.target.style.transform = "scale(1.03)"; // Slightly larger scale on hover
        }}
        onMouseOut={(e) => {
          e.target.style.backgroundColor = "#4CAF50";
          e.target.style.transform = "scale(1)";
        }}
      >
        Predict
      </button>
      <div
        style={{
          margin: "26px",
          padding: "20px",
          background: "radial-gradient(circle, #0f0f0f, #1a1a1a, #2a2a2a)", // Radial gradient for depth
          borderRadius: "20px", // Smooth rounded corners
          boxShadow: "0 8px 30px rgba(0, 255, 0, 0.3)", // Strong glowing shadow
          border: "2px solid rgba(0, 255, 0, 0.6)", // Glowing green border
          color: "#00ff00", // Bright green text for a digital look
          fontFamily: "'Orbitron', sans-serif", // Futuristic font
          textAlign: "center", // Centered content
          textTransform: "uppercase", // Uppercase text for a digital feel
          letterSpacing: "2px", // Spaced-out letters
          transition: "transform 0.3s ease, box-shadow 0.3s ease", // Smooth hover transitions
        }}
        onMouseOver={(e) => {
          e.currentTarget.style.boxShadow = "0 12px 40px rgba(0, 255, 0, 0.6)"; // Brighter glow on hover
          e.currentTarget.style.transform = "scale(1.05)"; // Slight zoom effect
        }}
        onMouseOut={(e) => {
          e.currentTarget.style.boxShadow = "0 8px 30px rgba(0, 255, 0, 0.3)";
          e.currentTarget.style.transform = "scale(1)";
        }}
      >
        <h3
          style={{
            color: "#00ff00", // Bright green text
            marginBottom: "15px",
            fontSize: "28px", // Larger font size for emphasis
            fontWeight: "bold", // Bold text
            textShadow: "0 0 10px rgba(0, 255, 0, 0.8)", // Strong glowing text effect
          }}
        >
          Percentile: <span>{percentile}</span>
        </h3>
        <h3
          style={{
            color: "#00ff00", // Bright green text
            fontSize: "28px", // Larger font size for emphasis
            fontWeight: "bold", // Bold text
            textShadow: "0 0 10px rgba(0, 255, 0, 0.8)", // Strong glowing text effect
          }}
        >
          All India Rank: <span>{rank}</span>
        </h3>
      </div>
    </div>
  );
}

export default App;