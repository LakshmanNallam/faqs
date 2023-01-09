import './index.css'

const FaqItem = props => {
  const {eachItem, con, plusbtnClicked, minusBtnClicked} = props
  const {id, questionText, answerText} = eachItem

  const plusbtnClickedcall = () => {
    plusbtnClicked(id)
  }

  const minusBtnClickedCall = () => {
    minusBtnClicked(id)
  }

  return con ? (
    <li className="FaqItem">
      <div className="queCon">
        <p>{questionText}</p>
        <button className="btn" type="button" onClick={minusBtnClickedCall}>
          <img
            src="https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png"
            alt="minus"
          />
        </button>
      </div>
      <div className="ansCon">
        <hr />
        <p>{answerText}</p>
      </div>
    </li>
  ) : (
    <li className="FaqItem">
      <div className="queCon">
        <p>{questionText}</p>
        <button className="btn" type="button" onClick={plusbtnClickedcall}>
          <img
            src="https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png"
            alt="plus"
          />
        </button>
      </div>
    </li>
  )
}

export default FaqItem
