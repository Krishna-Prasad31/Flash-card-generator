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
    </form>
  )
}