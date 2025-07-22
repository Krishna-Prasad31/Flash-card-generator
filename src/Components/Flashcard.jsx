import ReactMarkdown from "react-markdown"
import "../Components-Styles/flashcard.css"
import { useState } from "react"
import { generateFlashcards } from "../services/aiServices"

export default function GenerateFlashCards() {

  const [topics, setTopics] = useState("");
  const [ouput, setOutput] = useState("");
  const [loading, setLoading] = useState(false)

  const handleGenerate = async () => {
    setLoading(true);
    const topicArray = topics.split(" ").map(t => t.trim());
    const result = await generateFlashcards(topicArray);
    setOutput(result)
    setLoading(false);
  }

  return (
    <div className="markdown">
     <textarea 
     value={topics}
     onChange={(e) => setTopics(e.target.value)}/>
      
     <button onClick={handleGenerate}>
    {loading ? "Generating..." : "Generate"}
     </button>
     <pre>{ouput}</pre>
    </div>
  )
}