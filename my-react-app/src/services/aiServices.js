import axios from "axios";
const apiKey = import.meta.env.VITE_OPENROUTER_API_KEY;


export const generateFlashcards = async (topics) => {
  const prompt = `Generate 1 flashcard per topic in the following markdown format:
### Topic: [topic]
**Q:** [question]
**A:** [answer]
---

Topics:
${topics.join("\n")}`;

  try {
    const res = await axios.post(
      "https://openrouter.ai/api/v1/chat/completions",
      {
        model: "openchat/openchat-3.5-1210",
        messages: [{ role: "user", content: prompt }],
      },
      {
        headers: {
          "Authorization": `Bearer ${apiKey}` , // Replace this
          "HTTP-Referer": "http://localhost:5173", // or your deployed domain
          "Content-Type": "application/json",
        },
      }
    );

    return res.data.choices[0].message.content;
  } catch (error) {
    console.error("AI error:", error);
    return "⚠️ Failed to generate flashcards.";
  }
};
