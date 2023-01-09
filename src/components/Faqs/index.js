import {Component} from 'react'
import FaqItem from '../FaqItem'
import './index.css'

class Faqs extends Component {
  state = {initialList: []}

  plusbtnClicked = id => {
    const {initialList} = this.state
    console.log('vachindi', initialList, id)
    this.setState({initialList: [...initialList, id]})
  }

  minusBtnClicked = id => {
    const {initialList} = this.state
    this.setState({
      initialList: initialList.filter(eachItem => eachItem !== id),
    })
  }

  render() {
    const {initialList} = this.state
    console.log(initialList)
    const {faqsList} = this.props
    return (
      <div className="mainDiv">
        <ul className="whiteCon">
          <h1>FAQs</h1>
          {faqsList.map(eachItem => (
            <FaqItem
              eachItem={eachItem}
              con={initialList.includes(eachItem.id)}
              plusbtnClicked={this.plusbtnClicked}
              minusBtnClicked={this.minusBtnClicked}
              key={eachItem.id}
            />
          ))}
        </ul>
      </div>
    )
  }
}

export default Faqs
