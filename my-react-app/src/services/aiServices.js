import axios from "axios";

// Replace with your Groq API key from console.groq.com
const apikey = import.meta.env.VITE_GROQ_API_KEY; // Paste your key here

export const generateFlashcards = async (topics) => {
  const prompt = `Generate 1 flashcard for the topic:


Topics:
${topics.join("\n")}`;

  try {
    const res = await axios.post(
      "https://api.groq.com/openai/v1/chat/completions",
      {
        model: "llama-3.1-8b-instant", // Fast and free model
        messages: [
          {
            role: "user",
            content: prompt
          }
        ],
        max_tokens: 1000,
        temperature: 0.7
      },
      {
        headers: {
          Authorization: `Bearer ${apikey}`,
          "Content-Type": "application/json",
        },
        timeout: 15000, // 15 seconds - Groq is very fast
      }
    );
    
    return res.data.choices[0].message.content;
  } catch (error) {
    console.error("AI error:", error.response?.data || error);
    return "⚠️ Failed to generate flashcards. Please try again.";
  }
};