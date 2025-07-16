import { useState } from "react"
import "../Components-Styles/body.css"

export default function Body () {
  const [inputValue, setInputValue] = useState("");
  const [topics, setTopics] = useState([]);

  function handleSubmit(e) {
    e.preventDefault();
    if (inputValue.trim() !== "") {
      setTopics(prev => [...prev, inputValue.trim()]);
      setInputValue("");
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="input-container">
        <input
          type="text"
          placeholder="eg: Human Anatomy"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button className="submit-button" type="submit">
          Submit
        </button>
      </div>

      <div className="big">
        <div className="list-holder">
          <ul>
            {topics.map((topic, index) => (
              <li key={index}>{topic}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className="final-div">
        <span className="final-call">Would you like to proceed with the Topics?</span>
        <button className="proceed-button">Get Flash Cards</button>
      </div>
    </form>
  );
}
