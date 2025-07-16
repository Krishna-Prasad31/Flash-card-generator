import "../Components-Styles/body.css"

export default function Body () {
  return(
    <form>
      <div className="input-container">
        <input type="text" placeholder="eg:Human Anatomy" />
        <button className="submit-button"  type="submit">
          Submit
        </button>
      </div>
      <div className="big">
        <div className="list-holder">
          <ul>
            <li>History of Indian Civilization</li>
            <li>Components of human brain</li>
            <li>Important formulas of calculus</li>
            <li>Das Kapital summary</li>
            <li>African Wildlife(savannah)</li>
          </ul>
        </div>
      </div>
      <div className="final-div">
        <span className="final-call">Would you like to proceed with the Topics?</span>
      <button className="proceed-button">Get Flash Cards</button>
      </div>
    </form>
  )
}