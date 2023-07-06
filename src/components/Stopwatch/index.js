// Write your code here
import {Component} from 'react'

import './index.css'

class Stopwatch extends Component {
  state = {minutes: 0, seconds: 0}

  updateTimer = () => {
    this.setState(prevState => {
      if (prevState.seconds === 59) {
        return {
          minutes: prevState.minutes + 1,
          seconds: 0,
        }
      }
      return {
        seconds: prevState.seconds + 1,
      }
    })
  }

  startTimer = () => {
    this.timerId = setInterval(this.updateTimer, 1000)
  }

  stopTimer = () => {
    clearInterval(this.timerId)
  }

  resetTimer = () => {
    this.setState({
      minutes: 0,
      seconds: 0,
    })
    clearInterval(this.timerId)
  }

  render() {
    const {minutes, seconds} = this.state

    const minutesToDisplay = minutes > 9 ? minutes : 0 + String(minutes)
    const secondsToDisplay = seconds > 9 ? seconds : 0 + String(seconds)

    return (
      <div className="bg-cont">
        <div className="sub-bg-cont">
          <h1 className="heading">Stopwatch</h1>
          <div className="card-cont">
            <div className="timer-img-tag-cont">
              <img
                src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png"
                className="timer-img"
                alt="stopwatch"
              />
              <p className="timer-tag">Timer</p>
            </div>
            <h1 className="timer-el">
              {minutesToDisplay}:{secondsToDisplay}
            </h1>
            <div className="btns-cont">
              <button
                type="button"
                className="btn start"
                onClick={this.startTimer}
              >
                Start
              </button>
              <button
                type="button"
                className="btn stop"
                onClick={this.stopTimer}
              >
                Stop
              </button>
              <button
                type="button"
                className="btn reset"
                onClick={this.resetTimer}
              >
                Reset
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Stopwatch
