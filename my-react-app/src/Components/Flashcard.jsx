import ReactMarkdown from "react-markdown"
import "../Components-Styles/flashcard.css"

export default function GenerateFlashCards() {

  const markdown =  `Topic: effectiveness of ayurveda  
Q: How does Ayurveda approach disease treatment?  
A: Ayurveda uses a holistic approach, focusing on balancing bodily systems through diet, herbal treatment, and yogic breathing.

---
Topic: United Nations and its peace keeping efforts  
Q: What is the primary role of UN peacekeeping forces?  
A: To help countries navigate the difficult path from conflict to peace by providing security and support.

---
Topic: AI growth and emerging trend  
Q: What is a key trend in AI development today?  
A: Generative AI, such as large language models and image synthesis tools, is a major trend in AI.

---
Topic: Brain and its functions  
Q: What is the function of the cerebellum?  
A: It coordinates voluntary movements such as posture, balance, coordination, and speech.

---
Topic: Nephron and its functions  
Q: What does a nephron do in the kidney?  
A: It filters blood to remove waste and extra fluids, forming urine.

---
Topic: Human diseases and immunity  
Q: How does the immune system protect the body?  
A: It detects and destroys pathogens through various mechanisms like antibody production and cell-mediated responses.

---
Topic: Theory of relativity and time bending  
Q: What does Einstein’s theory of relativity say about time?  
A: Time slows down as you move faster or near massive objects — a concept known as time dilation.

---
Topic: Newton’s laws of motion  
Q: What is Newton’s First Law?  
A: An object in motion stays in motion unless acted upon by an external force.

---
Topic: Law of least mass action  
Q: What does the law of mass action state?  
A: The rate of a chemical reaction is proportional to the product of the masses of the reactants.

---
Topic: Indian diversified geography explained  
Q: Why is India’s geography considered diverse?  
A: Because it includes mountains, deserts, plains, plateaus, and coastal regions across different climates.

---
Topic: Australian fauna: a bizarre trend  
Q: Why is Australian fauna considered unique?  
A: Due to its isolated evolution, Australia is home to many endemic species like kangaroos and platypuses.`
  return (
    <div className="markdown">
      <ReactMarkdown>
      {markdown}
    </ReactMarkdown>
    </div>
  )
}