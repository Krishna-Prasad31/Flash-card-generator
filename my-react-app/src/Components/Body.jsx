import { useState } from "react"
import "../Components-Styles/body.css"
import { generateFlashcards } from "../services/aiServices";
import ReactMarkdown from "react-markdown"


export default function Body() {
  const [topics, setTopics] = useState("");
  const [output, setOutput] = useState(""); // Fixed typo: ouput -> output
  const [loading, setLoading] = useState(false);
  
  const handleSubmit = (e) => {
    e.preventDefault(); // Just prevent page reload, don't generate yet
  }
  
  const handleGenerate = async () => {
    if (!topics.trim()) {
      alert("Please enter some topics!");
      return;
    }
    
    setLoading(true);
    try {
      // Split by comma or space and filter out empty strings
      const topicArray = topics
        .split(/[,\s]+/) // Split by comma or space
        .map(t => t.trim())
        .filter(t => t.length > 0);
      
      const result = await generateFlashcards(topicArray);
      setOutput(result);
    } catch (error) {
      console.error("Error generating flashcards:", error);
      setOutput("❌ Error generating flashcards. Please try again.");
    }
    setLoading(false);
  }

  // Create topic array for display
  const topicArray = topics
    .split(/[,\s]+/)
    .map(t => t.trim())
    .filter(t => t.length > 0);

  return (
    <div>
      {/* Top input section */}
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <input
            type="text"
            placeholder="Learning something new?."
            value={topics}
            onChange={(e) => setTopics(e.target.value)}
            disabled={loading}
          />
          <button className="submit-button" type="submit">
            Submit
          </button>
        </div>
      </form>

      {/* Middle section - shows topics if any */}
      <div className="big">
        <div className="list-holder">
          {topicArray.length > 0 ? (
            <ul>
              {topicArray.map((topic, index) => (
                <li key={index}>{topic}</li>
              ))}
            </ul>
          ) : (
            <div className="empty-state">
              {/* You can add some placeholder content here or leave empty */}
            </div>
          )}
        </div>
      </div>

      {/* Bottom section - proceed button */}
      <div className="final-div">
        <span className="final-call">Would you like to proceed with the Topics?</span>
        <button 
          onClick={handleGenerate} 
          className="proceed-button"
          disabled={loading || topicArray.length === 0}
        >
          {loading ? "Generating..." : "Get Flash Cards"}
        </button>
      </div>

      {/* Output section */}
      {output && (
        <div className="output-section">
          <ReactMarkdown>{output}</ReactMarkdown>
        </div>
      )}
    </div>
  );
}