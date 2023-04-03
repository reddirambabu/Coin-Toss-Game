// Write your code here
import {Component} from 'react'
import './index.css'

class CoinToss extends Component {
  state = {tossResult: 0, total: 0, heads: 0, tails: 0}

  onChangeImage = () => {
    const randomNumber = Math.floor(Math.random() * 2)
    if (randomNumber === 0) {
      this.setState(previousValue => ({
        tossResult: randomNumber,
        total: previousValue.total + 1,
        heads: previousValue.heads + 1,
      }))
    } else {
      this.setState(previousValue => ({
        tossResult: randomNumber,
        total: previousValue.total + 1,
        tails: previousValue.tails + 1,
      }))
    }
  }

  render() {
    const {tossResult, total, heads, tails} = this.state
    const finalImage =
      tossResult === 0
        ? 'https://assets.ccbp.in/frontend/react-js/heads-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/tails-img.png'

    return (
      <div className="app-container">
        <div className="app-card-container">
          <h1 className="app-heading">Coin Toss Game</h1>
          <p className="app-sub-heading">Heads (or) Tails</p>
          <img className="toss-image" src={finalImage} alt="toss result" />
          <button
            type="button"
            className="toss-coin-button"
            onClick={this.onChangeImage}
          >
            Toss Coin
          </button>

          <p>
            <span>Total: {total} </span>
            <span>Heads: {heads} </span>
            <span>Tails: {tails} </span>
          </p>
        </div>
      </div>
    )
  }
}

export default CoinToss
