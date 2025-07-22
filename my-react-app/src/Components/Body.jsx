import { useState } from "react"
import "../Components-Styles/body.css"
import { generateFlashcards } from "../services/aiServices";
import ReactMarkdown from "react-markdown"

export default function Body() {
  const [topics, setTopics] = useState("");
  const [submittedTopics, setSubmittedTopics] = useState([]); // New state for submitted topics
  const [output, setOutput] = useState(""); // Fixed typo: ouput -> output
  const [loading, setLoading] = useState(false);
  
  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!topics.trim()) {
      alert("Please enter a topic!");
      return;
    }
    
    // Process new topics when Submit is clicked
    const newTopics = topics
      .split(',') // Split by comma in case user enters multiple at once
      .map(t => t.trim())
      .filter(t => t.length > 0);
    
    // Add new topics to existing ones (avoid duplicates)
    const updatedTopics = [...submittedTopics];
    newTopics.forEach(topic => {
      if (!updatedTopics.some(existing => existing.toLowerCase() === topic.toLowerCase())) {
        updatedTopics.push(topic);
      }
    });
    
    setSubmittedTopics(updatedTopics);
    setTopics(""); // Clear the input field after submitting
  }
  
  const handleGenerate = async () => {
    setLoading(true);
    try {
      const result = await generateFlashcards(submittedTopics);
      setOutput(result);
    } catch (error) {
      console.error("Error generating flashcards:", error);
      setOutput("❌ Error generating flashcards. Please try again.");
    }
    setLoading(false);
  }

  return (
    <div>
      {/* Top input section */}
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <input
            type="text"
            placeholder="Add a topic (e.g., Jurassic Park)"
            value={topics}
            onChange={(e) => setTopics(e.target.value)}
            disabled={loading}
          />
          <button className="submit-button" type="submit">
            Submit
          </button>
          {submittedTopics.length > 0 && (
            <button 
              type="button"
              onClick={() => setSubmittedTopics([])} 
              className="clear-button"
              style={{ marginLeft: '10px', padding: '12px 20px', fontSize: '14px', backgroundColor: '#ff6b6b', color: 'white', border: 'none', borderRadius: '20px', cursor: 'pointer' }}
            >
              Clear All
            </button>
          )}
        </div>
      </form>

      {/* Middle section - shows topics only after submit */}
      <div className="big">
        <div className="list-holder">
          {submittedTopics.length > 0 ? (
            <ul>
              {submittedTopics.map((topic, index) => (
                <li key={index}>{topic}</li>
              ))}
            </ul>
          ) : (
            <div className="empty-state">
              <p style={{ color: '#666', fontStyle: 'italic' }}>No topics added yet. Enter a topic above and click Submit.</p>
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
          disabled={loading || submittedTopics.length === 0}
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