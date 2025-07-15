import HeaderImage from "../assets/card-game_4298168.png"
import "../Components-Styles/header.css"

export default function Header () {
  return(
    <header>
      <div className="container">
        <img className="flashcards" src={HeaderImage} alt="flashcard image" />
      <h1 className="title">Flash Card Generator</h1>
      </div>
    </header>
  )
}